---
id: ae33bd3b-b3f1-4e2f-a9fb-36b3770582dd
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: JSONparseAjax-Method-handling-encoded-dates-in-a-JSON-string
slug: jsonparseajax-method-handling-encoded-dates-in-a-json-string
title: 'JSON.parseAjax Method, handling encoded dates in a JSON string.'
description: ''
date: 2010-09-28T14:37:00.000Z
modified: 2010-09-28T14:37:00.000Z
tags: []
categories:
  - JavaScript
  - Web Development
---

<div>
<p>
Okay, the availability of JSON.parse and JSON.stringify is awesome in modern browsers.
I&apos;m including my modifications to the <a href="http://json.org/" test="true">JSON.org</a> <a href="http://www.json.org/js.html" test="true">json2.js</a> script to include a 
method JSON.parseAjax that will revive ISO-8601 and Microsoft Ajax encoded 
Date strings into a native Date object.  I am also checking against the IE version 
as a bug in IE8&apos;s native JSON.parse method may raise an error that you can&apos;t catch 
when you extend the prototype of Array, Function, Object etc.
</p>
<pre class="brush: javascript">//parse a test string, where test1 is an ISO-8601 Date, and test2 is an MS-Ajax Date
var obj = JSON.parseAjax(&apos;{&quot;test1&quot;:&quot;1970-01-01T00:00:00Z&quot;, &quot;test2&quot;:&quot;\\\/Date(0)\\\/&quot;}&apos;);

//object was returned and test1&apos;s value equals test2&apos;s value
alert( obj &amp;&amp; obj.test1.valueOf() == obj.test2.valueOf());</pre>

<p>
This allows you to handle a number of different methods of returning Date-Time 
strings from the server.  It&apos;s worth noting that you should always send date 
times as UTC based when passing over the wire.
</p>
<p><a href="./files/json2-ajax.js" test="true">json2-ajax.js (15.25 kb)</a></p>
</div>