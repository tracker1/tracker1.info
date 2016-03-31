---
id: 5d222eee-ed9d-4f2e-bf07-ba571511a76b
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: Document Events In JavaScript
slug: document-events-in-javascript
title: Document Events In JavaScript
description: ''
date: 2008-09-11T17:13:00.000Z
modified: 2008-09-11T17:13:00.000Z
tags: []
categories:
  - Web Development
  - CSS
  - JavaScript
---

<p>
Okay, I was playing around with the DOM Ready vs Window Load events with <a href="http://prototypejs.org/" test="true">prototype.js</a> and noticed that in my simple example, the window event actually fired before the dom event in IE8.&#xA0; This could lead to some issues, especially on cached pages, so I wanted to make a note of it.
</p>
<div class="hl">
<pre style="color: #000000; background-color: #ffffff; font-size: 10pt; font-family: &apos;Courier New&apos;">
<a id="l_1"></a><span style="color: #666666">    1 </span>&#xFEFF;<span style="color: #0000ff; font-weight: bold">var</span> ready <span style="color: #ff0000">= {</span> <span style="color: #ec7f15">document</span><span style="color: #ff0000">:</span> <span style="color: #0000ff; font-weight: bold">false</span><span style="color: #ff0000">,</span> <span style="color: #ec7f15">window</span><span style="color: #ff0000">:</span> <span style="color: #0000ff; font-weight: bold">false</span> <span style="color: #ff0000">};</span>
<a id="l_2"></a><span style="color: #666666">    2 </span><span style="color: #0000ff; font-weight: bold">function</span> <span style="color: #000000; font-weight: bold">DocumentReady</span><span style="color: #ff0000">() {</span>
<a id="l_3"></a><span style="color: #666666">    3 </span>    <span style="color: #ec7f15">alert</span><span style="color: #ff0000">(</span><span style="color: #ff0000">&quot;Document Ready&quot;</span><span style="color: #ff0000">);</span>
<a id="l_4"></a><span style="color: #666666">    4 </span><span style="color: #ff0000">}</span>
<a id="l_5"></a><span style="color: #666666">    5 </span><span style="color: #0000ff; font-weight: bold">function</span> <span style="color: #000000; font-weight: bold">DocumentLoaded</span><span style="color: #ff0000">() {</span>
<a id="l_6"></a><span style="color: #666666">    6 </span>    <span style="color: #ec7f15">alert</span><span style="color: #ff0000">(</span><span style="color: #ff0000">&quot;Document Loaded&quot;</span><span style="color: #ff0000">);</span>
<a id="l_7"></a><span style="color: #666666">    7 </span><span style="color: #ff0000">}</span>
<a id="l_8"></a><span style="color: #666666">    8 </span><span style="color: #ec7f15">document</span><span style="color: #ff0000">.</span><span style="color: #000000; font-weight: bold">observe</span><span style="color: #ff0000">(</span><span style="color: #ff0000">&quot;dom:loaded&quot;</span><span style="color: #ff0000">,</span> <span style="color: #0000ff; font-weight: bold">function</span><span style="color: #ff0000">() {</span>
<a id="l_9"></a><span style="color: #666666">    9 </span>    <span style="color: #000000; font-weight: bold">DocumentReady</span><span style="color: #ff0000">();</span>
<a id="l_10"></a><span style="color: #666666">   10 </span>    ready<span style="color: #ff0000">.</span><span style="color: #ec7f15">document</span> <span style="color: #ff0000">=</span> <span style="color: #0000ff; font-weight: bold">true</span><span style="color: #ff0000">;</span>
<a id="l_11"></a><span style="color: #666666">   11 </span>    <span style="color: #0000ff; font-weight: bold">if</span> <span style="color: #ff0000">(</span>ready<span style="color: #ff0000">.</span><span style="color: #ec7f15">window</span><span style="color: #ff0000">)</span>
<a id="l_12"></a><span style="color: #666666">   12 </span>        <span style="color: #000000; font-weight: bold">DocumentLoaded</span><span style="color: #ff0000">();</span>
<a id="l_13"></a><span style="color: #666666">   13 </span><span style="color: #ff0000">});</span>
<a id="l_14"></a><span style="color: #666666">   14 </span>Event<span style="color: #ff0000">.</span><span style="color: #000000; font-weight: bold">observe</span><span style="color: #ff0000">(</span><span style="color: #ec7f15">window</span><span style="color: #ff0000">,</span> <span style="color: #ff0000">&quot;load&quot;</span><span style="color: #ff0000">,</span> <span style="color: #0000ff; font-weight: bold">function</span><span style="color: #ff0000">() {</span>
<a id="l_15"></a><span style="color: #666666">   15 </span>    ready<span style="color: #ff0000">.</span><span style="color: #ec7f15">window</span> <span style="color: #ff0000">=</span> <span style="color: #0000ff; font-weight: bold">true</span><span style="color: #ff0000">;</span>
<a id="l_16"></a><span style="color: #666666">   16 </span>    <span style="color: #0000ff; font-weight: bold">if</span> <span style="color: #ff0000">(!</span>ready<span style="color: #ff0000">.</span><span style="color: #ec7f15">document</span><span style="color: #ff0000">)</span> <span style="color: #0000ff; font-weight: bold">return</span><span style="color: #ff0000">;</span>
<a id="l_17"></a><span style="color: #666666">   17 </span>    <span style="color: #000000; font-weight: bold">DocumentLoaded</span><span style="color: #ff0000">();</span>
<a id="l_18"></a><span style="color: #666666">   18 </span><span style="color: #ff0000">});</span>
</pre>
</div>
<p>
The previous example shows how to handle this case.  Why is it even an issue?  Well, using the DOM ready event will allow you to hide things as soon as the tree has it.  Using the window loaded event is necessary in order to handle flowing layouts in terms of size/proportion.
</p>
