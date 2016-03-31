---
id: ebdb7873-a10a-423f-a817-a86f3d0c4723
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: js-function-arguments-as-array
slug: js-function-arguments-as-array
title: JS Function arguments and optional arguments
description: ''
date: 2010-02-19T12:13:00.000Z
modified: 2010-02-19T12:13:00.000Z
tags:
  - javascript
  - function
  - arguments
categories:
  - JavaScript
---

<p>I hate to admit it, but I do read <a href="http://javascript.about.com/b/" test="true">Stephen Chapman&apos;s Blog</a>, and to be honest I tend to find a lot of the things he covers as incomplete, or outright not the best way to do something.  A lot of entries are simple repeats of past entries as well.  In the past I&apos;ve had comments censored, specifically when he stated that you should just ignore IE in a prior post, I had a bit of a strongly worded response.  In any case, today&apos;s entry covered <a href="http://javascript.about.com/library/blargs.htm" test="true">Optional Function Arguments</a>.  There&apos;s one small point he missed the boat with here regarding the arguments instance.</p>
<blockquote><em>&quot;That is as far as the similarity to arrays goes though as none of the other methods and properties that can be used with arrays can be used with the arguments object.&quot;</em></blockquote>
<p>It is possible to easily convert the arguments object to an Array instance though. Here&apos;s a simple example.</p>
<pre class="brush: js">function argumentsToArray() {

  //convert object arguments to args Array
  var args = Array.prototype.slice(arguments, 0);

  //alerts true
  alert(args instanceof Array);

}</pre>
<p><br>I&apos;ve thought about, and may actually do more of these annotation posts.  I&apos;ve also been thinking about doing some compilation posts with information from <a href="http://ajaxian.com/" test="true">Ajaxian</a>, <a href="http://dailyjs.com/" test="true">DailyJS</a> and a few other sites.</p>