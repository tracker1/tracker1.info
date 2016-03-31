---
id: 8f47d49e-466c-4002-aa19-a4e9fab64ea8
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: Document-Ready-and-Loaded-Events-with-prototypejs
slug: document-ready-and-loaded-events-with-prototypejs
title: Document Ready and Loaded Events with prototype.js
description: ''
date: 2008-09-11T18:07:00.000Z
modified: 2008-09-11T18:07:00.000Z
tags: []
categories:
  - JavaScript
  - prototype
  - Web Development
---

<p>Okay, I was playing around with the DOM Ready vs Window Load events with <a href="http://prototypejs.org/" test="true">prototype.js</a> and noticed that in my simple example, the window event actually fired before the dom event in IE8.&#xA0; This could lead to some issues, especially on cached pages, so I wanted to make a note of it.&#xA0; Why is it even an issue?  Well, using the DOM ready event will allow you to hide things as soon as the tree has it.  Using the window loaded event is necessary in order to handle flowing layouts in terms of size/proportion. [more]</p>
<pre class="brush: js">Object.extend(document, {
    isDocReady: false,
    isDocLoaded: false,
    ready: function(fn) { Event.observe(document, &quot;doc:ready&quot;, fn); },
    load: function(fn) { Event.observe(document, &quot;doc:loaded&quot;, fn); }
});
Event.observe(document, &quot;dom:loaded&quot;, function() {
    Event.fire(document, &quot;doc:ready&quot;);
    document.isDocReady = true;
    if (document.isDocLoaded)
        Event.fire(document, &quot;doc:loaded&quot;);
});
Event.observe(window, &quot;load&quot;, function() {
    document.isDocLoaded = true;
    if (!document.isDocReady) return;
    Event.fire(document, &quot;doc:loaded&quot;);
});</pre>
<p>The above establishes some custom events for the document object, and creates listeners that will assure that they fire in the correct order... this way I can subscribe to the new events, directly, or through the jQuery-style methods...</p>
<pre class="brush: js">document.observe(&quot;doc:ready&quot;, function(){
    alert(&quot;Ready&quot;);
});
document.observe(&quot;doc:loaded&quot;, function(){
    alert(&quot;Loaded&quot;);
});
document.ready(function(){ alert(&quot;Ready Too!&quot;); });
document.load(function(){ alert(&quot;Loaded Too!&quot;); });
</pre>
<p>Much nicer being able to have both available, with a guarantee they fire in the expected oerder.</p>
<p><em>Updated 2009-06-22:  combined with the prior post.</em></p>