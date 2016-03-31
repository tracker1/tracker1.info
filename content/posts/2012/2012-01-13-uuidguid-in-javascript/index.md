---
id: e576a7ee-7df9-4d38-9af3-220549b0dd0e
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: UUIDGUID-in-JavaScript
slug: uuidguid-in-javascript
title: UUID/GUID in JavaScript
description: ''
date: 2012-01-13T12:43:00.000Z
modified: 2012-01-13T12:43:00.000Z
tags: []
categories:
  - JavaScript
---

<p>Just wanted to push out this somewhat useful JavaScript snippet for generating a UUID (GUID) in JavaScript.</p>
<br>
<pre class="brush: js">//UUID/Guid Generator
// use: UUID.create() or UUID.createSequential()
// convenience:  UUID.empty, UUID.tryParse(string)
(function(w){
  // From http://baagoe.com/en/RandomMusings/javascript/
  // Johannes Baag&#xC3;&#xB8;e &lt;baagoe@baagoe.com&gt;, 2010
  function Mash() {
    var n = 0xefc8249d;

    var mash = function(data) {
    data = data.toString();
    for (var i = 0; i &lt; data.length; i++) {
      n += data.charCodeAt(i);
      var h = 0.02519603282416938 * n;
      n = h &gt;&gt;&gt; 0;
      h -= n;
      h *= n;
      n = h &gt;&gt;&gt; 0;
      h -= n;
      n += h * 0x100000000; // 2^32
    }
    return (n &gt;&gt;&gt; 0) * 2.3283064365386963e-10; // 2^-32
    };

    mash.version = &apos;Mash 0.9&apos;;
    return mash;
  }

  // From http://baagoe.com/en/RandomMusings/javascript/
  function Kybos() {
    return (function(args) {
    // Johannes Baag&#xC3;&#xB8;e &lt;baagoe@baagoe.com&gt;, 2010
    var s0 = 0;
    var s1 = 0;
    var s2 = 0;
    var c = 1;
    var s = [];
    var k = 0;

    var mash = Mash();
    var s0 = mash(&apos; &apos;);
    var s1 = mash(&apos; &apos;);
    var s2 = mash(&apos; &apos;);
    for (var j = 0; j &lt; 8; j++) {
      s[j] = mash(&apos; &apos;);
    }

    if (args.length == 0) {
      args = [+new Date];
    }
    for (var i = 0; i &lt; args.length; i++) {
      s0 -= mash(args[i]);
      if (s0 &lt; 0) {
      s0 += 1;
      }
      s1 -= mash(args[i]);
      if (s1 &lt; 0) {
      s1 += 1;
      }
      s2 -= mash(args[i]);
      if (s2 &lt; 0) {
      s2 += 1;
      }
      for (var j = 0; j &lt; 8; j++) {
      s[j] -= mash(args[i]);
      if (s[j] &lt; 0) {
        s[j] += 1;
      }
      }
    }

    var random = function() {
      var a = 2091639;
      k = s[k] * 8 | 0;
      var r = s[k];
      var t = a * s0 + c * 2.3283064365386963e-10; // 2^-32
      s0 = s1;
      s1 = s2;
      s2 = t - (c = t | 0);
      s[k] -= s2;
      if (s[k] &lt; 0) {
      s[k] += 1;
      }
      return r;
    };
    random.uint32 = function() {
      return random() * 0x100000000; // 2^32
    };
    random.fract53 = function() {
      return random() +
      (random() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
    };
    random.addNoise = function() {
      for (var i = arguments.length - 1; i &gt;= 0; i--) {
      for (j = 0; j &lt; 8; j++) {
        s[j] -= mash(arguments[i]);
        if (s[j] &lt; 0) {
        s[j] += 1;
        }
      }
      }
    };
    random.version = &apos;Kybos 0.9&apos;;
    random.args = args;
    return random;

    } (Array.prototype.slice.call(arguments)));
  };

  var rnd = Kybos();

  // UUID/GUID implementation from http://frugalcoder.us/post/2012/01/13/javascript-guid-uuid-generator.aspx
  var UUID = {
    &quot;empty&quot;: &quot;00000000-0000-0000-0000-000000000000&quot;
    ,&quot;parse&quot;: function(input) {
      var ret = input.toString().trim().toLowerCase().replace(/^[\s\r\n]+|[\{\}]|[\s\r\n]+$/g, &quot;&quot;);
      if ((/[a-f0-9]{8}\-[a-f0-9]{4}\-[a-f0-9]{4}\-[a-f0-9]{4}\-[a-f0-9]{12}/).test(ret))
        return ret;
      else
        throw new Error(&quot;Unable to parse UUID&quot;);
    }
    ,&quot;createSequential&quot;: function() {
      var ret = new Date().valueOf().toString(16).replace(&quot;-&quot;,&quot;&quot;)
      for (;ret.length &lt; 12; ret = &quot;0&quot; + ret);
      ret = ret.substr(ret.length-12,12); //only least significant part
      for (;ret.length &lt; 32;ret += Math.floor(rnd() * 0xffffffff).toString(16));
      return [ret.substr(0,8), ret.substr(8,4), &quot;4&quot; + ret.substr(12,3), &quot;89AB&quot;[Math.floor(Math.random()*4)] + ret.substr(16,3),  ret.substr(20,12)].join(&quot;-&quot;);
    }
    ,&quot;create&quot;: function() {
      var ret = &quot;&quot;;
      for (;ret.length &lt; 32;ret += Math.floor(rnd() * 0xffffffff).toString(16));
      return [ret.substr(0,8), ret.substr(8,4), &quot;4&quot; + ret.substr(12,3), &quot;89AB&quot;[Math.floor(Math.random()*4)] + ret.substr(16,3),  ret.substr(20,12)].join(&quot;-&quot;);
    }
    ,&quot;random&quot;: function() {
      return rnd();
    }
    ,&quot;tryParse&quot;: function(input) {
      try {
        return UUID.parse(input);
      } catch(ex) {
        return UUID.empty;
      }
    }
  };
  UUID[&quot;new&quot;] = UUID.create;

  w.UUID = w.Guid = UUID;
}(window || this));</pre>

<p>NOTE: Cryptographically strong random number generator thanks to <a href="http://baagoe.com/en/RandomMusings/javascript/" test="true">Johannes Baagoe</a></p>