---
id: 604fcf1f-5023-4946-805d-df1c9dc8e1e6
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: EcmaScript-5s-Date-Extensions
slug: ecmascript-5s-date-extensions
title: "EcmaScript 5's Date Extensions"
description: "This script will allow you to utilize EcmaScript 5's extensions to the Date object today."
date: 2010-01-07T10:44:00.000Z
modified: 2010-01-07T10:44:00.000Z
tags:
  - javascript
  - date
  - echmascript5
categories:
  - JavaScript
---

<p>Okay, so you want to utilize some of the niceties of the new EcmaScript 5 extensions to Date.&#xA0; Namely they&apos;ve added a nice instantiation from an ISO-8601-style string, as well as a Date.prototype.toISOString method definition.&#xA0; In addition there are Date.UTC and Date.now methods defined.&#xA0; As the nice guys over at Mozilla have offered script based extensions to Arrays to support their method extensions there, I wanted to do something similar for Date instances.&#xA0; I&apos;ve managed to do this, and have had it done since the ES5 specs were released, but figured I should put this out there for anyone interested.</p>
<pre class="brush: javascript">var epoch1 = new Date(&quot;1970-01-01T00:00:00.000Z&quot;);
var epoch2 = new Date(0);

if (epoch1.getTime() == epoch2.getTime())
    alert(&quot;Epochs match!&quot;);
    
alert(epoch1.toString()); //localized date instance of the JS epoch
alert(epoch2.toISOString()); // &quot;1970-01-01T00:00:00.000Z&quot;
alert(epoch1 instanceof Date); // true
alert(epoch1.constructor == Date); //true
alert(Date.UTC(1970,0,1,0,0,0,0)); // 0</pre>
<p>I also have a few convenience methods for handling Microsoft&apos;s JSON encoded strings. As well as rolling a date from a &quot;Local&quot; or &quot;UTC&quot; version.</p>
<p><a href="./files/DateExtensions.js" test="true">DateExtensions.js (11.67 kb)</a></p>
<p><em>Edit 2010-01-08: I added missing support for .constructor == Date</em></p>