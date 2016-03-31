---
id: 31cc6d14-c1a5-47c4-8516-91642191a5c3
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: Trim-Strings-In-JavaScript
slug: trim-strings-in-javascript
title: Trim Strings In JavaScript
description: ''
date: 2008-08-27T12:33:00.000Z
modified: 2008-08-27T12:33:00.000Z
tags:
  - javascript
  - prototype
  - jquery
categories:
  - DLR
  - JavaScript
---

<p>Okay, so you want to trim a string in JavaScript/JScript/EcmaScript, but you find that the functionality just isn&apos;t built in.&#xA0; Here&apos;s a quick little snippet that will add said functionality pretty easily. [more]</p>
<pre class="brush: js">if (!String.prototype.trim)
    String.prototype.trim = function() {
        return this.toString().replace(/^[\s\r\n]*([\w\W]*?)[\s\r\n]*$/, &quot;$1&quot;);
}
</pre>
<p>Also... here&apos;s a library for <a href="http://www.JavascriptToolbox.com/lib/date/" test="true">extending JS&apos;s Date class</a>.</p>
<p>In addition to these little quickies, take a look at <a href="http://www.prototypejs.org/" test="true">prototype.js</a> or <a href="http://jquery.com/" test="true">jQuery</a>.  Both of these frameworks provide some cool things, and though they overlap in terms of functionality, both work very well.</p>