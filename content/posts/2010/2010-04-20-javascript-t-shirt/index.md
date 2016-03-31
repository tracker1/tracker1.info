---
id: b5576964-0794-473b-b6ca-ac17c542316a
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: javascript-t-shirt
slug: javascript-t-shirt
title: JavaScript T-Shirt
description: Just an idea for a t-shirt for JavaScript.
date: 2010-04-20T09:44:00.000Z
modified: 2010-04-20T09:44:00.000Z
tags:
  - javascript
  - tshirt
  - fun
categories:
  - JavaScript
  - fun
---

<p>Thinking it would be cool to put this on a T-Shirt, with the <a href="http://www.jsninja.org/" test="true">jsninja.org</a> logo on the front, and the following code snippet on the back.</p>
<pre class="brush: javascript">    var a = [&quot;lawn&quot;,&quot;off&quot;,&quot;get&quot;,&quot;my&quot;];
    var o = (function(){
        var u = function(){
                var t = this;
                var s = arguments;
                return [t[s[0]],t[s[1]],t[s[2]],t[s[3]]];
            };
        var b = Array.prototype.slice.call(arguments);
        var a = b.shift();
        return u.apply(a,b).join().replace(/\,/g,&apos; &apos;);
    }(a,2,1,3,0));
    alert(o[0].toUpperCase() + o.substr(1) + &apos;!&apos;);</pre>