---
id: 0abe9260-2612-472d-a29b-1458cd99c4c4
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: C-Tip-Use-StringBuilder
slug: c-tip-use-stringbuilder
title: 'C# Tip: Use StringBuilder'
description: "It's easy to overlook some of the built in functionality in the .Net framework.  In this entry I cover the use of StringBuilder instead of appending to existing string variables"
date: 2008-11-05T18:31:00.000Z
modified: 2008-11-05T18:31:00.000Z
tags:
  - strings
  - 'c#'
  - stringbuilder
categories:
  - .Net
  - 'C#'
  - Web Development
---

<p>Okay, as an extension to the last post on String.Format, I&apos;m doing a quick introduction to the System.Text.StringBuilder class.&#xA0; Why, you ask.&#xA0; Because when you append to a string, there is a lot of memory being allocated, transferred and dumped behind the scenes.&#xA0; Say you have a string of &quot;My string is&quot; and you want to append &quot; cool.&quot; what happens is a new string is allocated in memory, with enough space for the original string, and the appended value.&#xA0; Then the original string is copied to the beginning, and the appended string is copied after.&#xA0; This is very inneficient.&#xA0; StringBuilder pre-allocates additional space, and handles the concatenation behind the scenes. [more]</p>
<pre class="brush: csharp;">using System.Text;

namespace MyDemo
{
    class MyClass
    {
        public string MyMethod()
        {
            StringBuilder s = new StringBuilder();
            s.Append(&quot;My string is&quot;);
            s.Append(&quot; cool&quot;);
            return s.ToString();
        }
    }
}</pre>
<p>In the above example, you can see that it isn&apos;t at all difficult to use StringBuilder.  You do need to remember to use the ToString() method to retrieve the internal value back as a string.  There is one cool feature of StringBuilder that is related to the last post, that is the AppendFormat() method.</p>
<pre class="brush: csharp;">s.AppendFormat(
    &quot;It is now {0}.&quot;,
    DateTime.Now
);</pre>
<p>With AppendFormat, you can add values into your StringBuilder class, as you would with a String.Format.&#xA0; Now, if you want some similar functionality in JavaScript, you can always use an array, in place of a StringBuilder.&#xA0; And use the push() method.&#xA0; Once you have your array filled, you can use the join(&quot;&quot;) method, you need to use an empty string as the argument, as the default is a comma.</p>