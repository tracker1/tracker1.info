---
id: 37c7aa49-71e8-4069-a227-86981e0e5630
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: firebug_console_stub
slug: firebug-console-stub
title: Stubbing out the console object so Firebug statements can be left in place
description: "Just a quick snippet in javascript so that console statements meant for firebug's window.console object can be left in place."
date: 2009-07-22T10:52:00.000Z
modified: 2009-07-22T10:52:00.000Z
tags:
  - javascript
  - firefox
  - firebug
  - window.console
categories:
  - JavaScript
  - Web Development
---

<p>Okay, so you love the Firebug Console, and related output to the console tab within Firebug.&#xA0; Don&apos;t we all, however there is a minor problem in leaving in all your log, and debug (etc) statements, and that is the fact that the console object doesn&apos;t exist in other browsers, or Firefox without Firebug.&#xA0; You will want to put the script segments below into a file that is called before other scripts on your page. [more]</p>
<p>First, I create a simple stub function off of the existing Function class, this allows for a single point of reference for empty functions, without generating a new Function instance for each method it gets used as.</p>
<pre class="brush: js">(function(){
	//stub out firebug console object
	//		will allow console statements to be left in place
	if (typeof Function.empty != &apos;function&apos;) Function.empty = function(){};

	if (typeof console == &apos;undefined&apos;) console = {};

	if (typeof console.log == &apos;undefined&apos;) console.log = Function.empty;

	if (typeof console.debug == &apos;undefined&apos;) console.debug = log;

	if (typeof console.info == &apos;undefined&apos;) console.info = log;

	if (typeof console.warn == &apos;undefined&apos;) console.warn = log;

	if (typeof console.error == &apos;undefined&apos;) console.error = log;

	if (typeof console.assert == &apos;undefined&apos;) console.assert = function(){
		var args = Array.prototype.slice.call(arguments);
		var parm = args.shift();
		if (!parm) {
			console.error(arguments);
			throw new Error(&quot;Assert failed.&quot;);
		}
	};

	if (typeof console.dir == &apos;undefined&apos;) console.dir = function(input) { 
		if (typeof JSON != &apos;undefined&apos; &amp;&amp; typeof JSON.stringify == &quot;function&quot;)
			console.log( JSON.stringify(input) );
		else
			console.log(input.toString());
	};

	if (typeof console.dirxml == &apos;undefined&apos;) console.dirxml = console.dir;

	if (typeof console.trace == &apos;undefined&apos;) console.trace = Function.empty;
	if (typeof console.group == &apos;undefined&apos;) console.group = Function.empty;
	if (typeof console.groupCollapsed == &apos;undefined&apos;) console.groupCollapsed = Function.empty;
	if (typeof console.groupEnd == &apos;undefined&apos;) console.groupEnd = Function.empty;
	if (typeof console.time == &apos;undefined&apos;) console.time = Function.empty;
	if (typeof console.timeEnd == &apos;undefined&apos;) console.timeEnd = Function.empty;
	if (typeof console.profile == &apos;undefined&apos;) console.profile = Function.empty;
	if (typeof console.profileEnd == &apos;undefined&apos;) console.profileEnd = Function.empty;
	if (typeof console.count == &apos;undefined&apos;) console.count = Function.empty;

	function log() {
		if (typeof JSON != &quot;undefined&quot; &amp;&amp; typeof JSON.stringify == &quot;function&quot;) return console.log(JSON.stringify(arguments));
		return console.log(arguments.toString());
	}
}());</pre>
<p><b>Updated 2011-12-16:</b> I extended this to include a bit more functionality for those browsers with console.log, but not much else.</p>