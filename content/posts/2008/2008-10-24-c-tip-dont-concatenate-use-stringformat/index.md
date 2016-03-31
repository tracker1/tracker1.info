---
id: b642bcde-2c33-43d4-935d-4ec128ac64e1
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: C-Tip-Dont-Concatenate-Use-StringFormat
slug: c-tip-dont-concatenate-use-stringformat
title: "C# Tip: Don't Concatenate, Use String.Format"
description: Using String.Format instead of inline concatenation makes code far more readable.
date: 2008-10-24T09:57:00.000Z
modified: 2008-10-24T09:57:00.000Z
tags:
  - strings
  - 'c#'
  - vb
categories:
  - .Net
  - 'C#'
---

<p>Something that tends to annoy me, is seeing a ton of string concatenation, such as below.</p>
<pre class="brush: csharp;">string mystring = &quot;&lt;a href=&quot;\&quot;&gt;&quot; +
    ResourceHelper.GetString(&quot;somestr&quot;, SiteHelper.GetCurrentCulture()) +
    &quot;&lt;/a&gt;&quot;; </pre>
<p>[more]The real issue is seeing the above code all on one line, and with the various html markup intersperced with various object variables.&#xA0; It can be very difficult to follow, especially when you see all this one one line, or not very well broken up.&#xA0; This leads me to the happy little method known as String.Format(), which takes a format string as its&apos; first parameter, and a set of objects as parameters to be formatted into the string.&#xA0; Below is the above example rewritten to use String.Format().</p>
<pre class="brush: csharp;">string mystring = string.Format(
    &quot;&lt;a href=&quot;\&quot;&gt;{3}&lt;/a&gt;&quot;,
    someObject.BasePath,
    otherObject.SomeValue,
    ResourceHelper.GetString(&quot;MyResourceKey&quot;, SiteHelper.GetCurrentCulture())
); </pre>
<p><span>[more]</span></p>
<p>The above example is much more readable.&#xA0; The format string takes numbered parameters starting at 0 and can even take a format string such as for a date.</p>
<pre class="brush: csharp;">string formattedString = string.Format(
    &quot;{0:yyyy-MM-dd}{1}{2:0,0.0000}&quot;,
    someObject.DateTimeValue,
    someObject.StringValue,
    someObject.DoubleValue
); </pre>
<p>As you can see, using String.Format can make your formatted text much easier to follow and read than inline concatenation.&#xA0; I know the examples above apply to formatting text into html markup, and acknowledge that this isn&apos;t the *only* place where this happens, however it is one of the more common themes I see used over, and over again.&#xA0; If your string floats off to the right of the screen, and you can&apos;t easily follow the concatenation, then string.Format is probably a good idea.&#xA0; Especially combined with multi-line strings in C# (@&quot;&quot;).&#xA0; Note, if you need a literal curly braces symbol (&quot;{&quot; or &quot;}&quot;) simply double the character up (&quot;{{&quot; or &quot;}}&quot;).</p>