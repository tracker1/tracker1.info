---
id: a37c442a-b228-47b6-b368-b6abd911c9ca
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: js-is-empty
slug: js-is-empty
title: Detect empty values in JavaScript
description: 'A simple check for valid, non-empty values in JavaScript.'
date: 2010-02-15T11:14:00.000Z
modified: 2010-02-15T11:14:00.000Z
tags:
  - javascript
  - 'null'
  - empty
  - undefined
categories:
  - JavaScript
  - Web Development
---

<p>Okay, this is a quick one.  There are several states that can be considered empty in JavaScript, a non-numeric value in a number, an invalid date, and empty string, an undefined value, and a null value.  The issue is that some of these require testing against isNaN, and others will evaluate as matching null or an empty string (ex: the number zero and the boolean false).  What I wanted was a simple method to check for a non-empty object or string, here it is.</p><p>
<pre class="brush: js">function isEmpty(obj) {
    if (typeof obj == &apos;undefined&apos; || obj === null || obj === &apos;&apos;) return true;
    if (typeof obj == &apos;number&apos; &amp;&amp; isNaN(obj)) return true;
    if (obj instanceof Date &amp;&amp; isNaN(Number(obj))) return true;
    return false;
}</pre>

</p><p><br>
How it works, is first it tests for an &apos;undefined&apos; object, an object that is explicitly equal to null, or explicitly equal to an empty string.  If it matches, it&apos;s empty.  From here there&apos;s some more specific checking, if it&apos;s a number type of variable, and isNaN (Not a Number), then it&apos;s empty.  If it&apos;s a date, and Number(obj) (which gets the value of the date as a Number) isNaN, then it&apos;s an invalid date, and ergo isEmpty.  Otherwise the isEmpty returns false (valid, non-empty value). Hope this helps some of you. :)
</p>

