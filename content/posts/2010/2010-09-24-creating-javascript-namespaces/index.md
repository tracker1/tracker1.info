---
id: bf1eef16-1add-4877-b31a-87722974f0bf
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: Creating-JavaScript-Namespaces
slug: creating-javascript-namespaces
title: Creating JavaScript Namespaces
description: ''
date: 2010-09-24T15:01:00.000Z
modified: 2010-09-24T15:01:00.000Z
tags: []
categories:
  - JavaScript
  - jQuery
  - Web Development
---

<div>
<p>When using JavaScript these days, it is generally a good idea to namespace your javascript methods so that they don&apos;t polute the global namespace.</p>
<pre class="brush: javascript">if (typeof mysite == &apos;undefined&apos;) var mysite = {};
mysite.section = mysite.section || {};
mysite.section.subNamespace = mysite.section.subNamespace || {};
mysite.section.subNamespace.component = (function(){ ... }());
</pre>

<p>This allows you to create a clean separation of your utilization. Although you may not want to go as deep as the example above, you can see
how this could very well become cumbersome when you want to declare one or more namespaces.  It would be nice to have a helper method that 
lets you simply declare namespaces.</p>
<pre class="brush: javascript">//declare a single namespace
namespace(&apos;mysite.section.subNamespace.component&apos;);

//declare multiple namespaces at once
namespace(&apos;mysite.section2&apos;, &apos;mysite._utilities&apos;);</pre>

<p>This works out much nicer, and is easier to repeate as-needed when creating your namespaces.  The function I am using for this is below.</p>
<pre class="brush: javascript">var namespace = (function(root){
	//regular expression to limit formatting of namespaces
	var nsre = /^([\$\_a-z][\$\_a-z\d]*\.?)+$/i

	//define returned function
	return function(ns) {
		var args = Array.prototype.slice.call(arguments);
		var ret = [];
		while (args.length) {
			ns = genNS(args.shift());
			if (ns) ret.push(ns);
		}
		if (ret.length == 0) return; //undefined, no valid input
		if (arguments.length == 1) return ret[0]; //only a single input, return that namespace
		return ret; //used overload for multiple namespaces, return the array/list
	}
	
	//private static method to generate a single namespace
	function genNS(ns) {
		if (!ns.match(nsre)) return;
		ns = ns.split(&apos;.&apos;);
		var base = root;
		for (var i=0; i&lt;ns.length; i++) {
			base[ns[i]] = base[ns[i]] || {};
			base = base[ns[i]];
		}
		return base; //return resulting namespace object
	}
}(this));</pre>

<p>
	This functionality is very useful, and is included in a number of API toolkits.
	You could replace the <code><b>var namespace</b></code> declaration and attach it
	to an existing object such as <code><b>$.ns</b></code>, which would 
	attach it to an existing reference.
</p>
<p>
	If you have suggestions for future topics, feel free to leave a comment or 
	contact me via email.
</p>
</div>