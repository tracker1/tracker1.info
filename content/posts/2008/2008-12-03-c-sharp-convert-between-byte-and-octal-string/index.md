---
id: 6cf1919c-e593-4642-8e65-a07ee98a3698
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: C-Sharp-Convert-Between-Byte-and-Octal-String
slug: c-sharp-convert-between-byte-and-octal-string
title: 'C# Tip: Creating an Octal String from a Byte in C#'
description: 'Okay, so C# (.Net) has some awesome functionality for creating a hex string from a numeric value.  But what if you need an octal string for a binary value.'
date: 2008-12-03T18:19:00.000Z
modified: 2008-12-03T18:19:00.000Z
tags:
  - 'c#'
categories:
  - .Net
  - 'C#'
---

<p>Okay, so C# (.Net) has some awesome functionality for creating a hex string from a numeric value.&#xA0; But what if you need an octal string for a binary value.&#xA0; The real key is realizing that you need to move the value by 3 bits at a time for each octal number, and to XAND the value by 7 which is the highest value an octal number can hold. [more]</p>
<pre class="brush: csharp;">public static string EncodeOctalString(byte value) 
{ 
    //convert to int, for cleaner syntax below. 
    int x = (int)value; 
 
    //return octal encoding \ddd of the character value. 
    return string.Format( 
        @&quot;\{0}{1}{2}&quot;, 
        ((x &gt;&gt; 6) &amp; 7), 
        ((x &gt;&gt; 3) &amp; 7), 
        (x &amp; 7) 
    ); 
}</pre>
<p><br>Below is the reverse method, to convert from an octal value back into a byte.</p>
<pre class="brush: csharp;">public static byte DecodeOctalString(string octalValue) 
{ 
    int a = int.Parse(octalValue.Substring(1, 1)); 
    int b = int.Parse(octalValue.Substring(2, 1)); 
    int c = int.Parse(octalValue.Substring(3, 1)); 
 
    return (byte)((a&lt;&lt;6) | (b&lt;&lt;3) | (c)); 
} </pre>
<p><br>Hope it helps someone out there.&#xA0; It&apos;s actually a problem I solved several years ago when working with inputting data into PostgreSQL.&#xA0; The reverse method is what I needed today in order to be able to decode a javascript escaped string.&#xA0; My next post will show what this is about.</p>