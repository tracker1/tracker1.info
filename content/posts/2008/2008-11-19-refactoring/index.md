---
id: 246cd713-7161-48d3-b10b-79865a3dd2ed
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: Refactoring
slug: refactoring
title: Refactoring
description: Just a few quick notes on refactoring.
date: 2008-11-19T19:29:00.000Z
modified: 2008-11-19T19:29:00.000Z
tags:
  - refactoring
categories:
  - .Net
  - Architecture
---

<p>Okay, there are two main reasons to refactor.&#xA0; The first is clarity of code.&#xA0; Since we have a working base, we can now concentrate on making our logic readable, breaking major blocks of code into separate methods, as well as possibly change how certain calls work.&#xA0; The second major reason to refactor is for performance or scale.&#xA0; One needs to first realize that scale and performance aren&apos;t always the same thing.&#xA0; Scaling is about consistency, where performance is about speed.&#xA0; The two often have the same result, but not always. [more] As an example, using out of process ASP.Net Sessions scales better, but the performance of a single connection is slower.</p>
<p>When refactoring for readability it often comes down to utilizing the framework and, or the language being used.&#xA0; Often there are language constructs or framework objects and methods that can increase clarity.</p>
<pre class="brush: csharp">try
{
    if (Context.Items[&quot;SomeValue&quot;] != null)
        someVar = int.Parse(Context.Items[&quot;SomeValue&quot;]);
    else
        someVar = 0;
}
catch (Exception)
{
    someVar = 0;
}</pre>
<p>The above example is fairly common in C# (.Net) code.  This is because many people don&apos;t know about the TryParse methods that were added in .Net version 2.</p>
<pre class="brush: csharp">int.TryParse(Context.Items[&quot;SomeValue&quot;].ToString(), someVar);</pre>
<p>Just that small piece of knowledge about the framework being used can mean a lot less code.  This example doesn&apos;t really improve performance, so much as readability.  This is because it mearly abstracts your logic out.  Just the same, imagine having to validate a dozen numeric inputs in a row.</p>
<p>As to performance, there is another new development in .Net that can help a lot.  A project I am working on was using a DataTable in memory as retreived from a database call using a DataAdapter to store said settings in memory.  When looking up a particular value the .Select() method of the DataTable was being called with the given search value for the key.  This is relatively quick, until you consider that this was being called a few dozen times per page, on a site with many thousands of simultaneous users.  Below is the logic for the before.</p>
<pre class="brush: csharp">public static string GetConfigValue(string key)
{
    string ret = null;
    DataTable dtConfigSettings = GetConfig();
    if (key != string.Empty)
    {
        DataRow[] drs = dtConfigSettings.Select(&quot;KeyName=&apos;&quot; + key + &quot;&apos;&quot;);
        if (drs != null &amp;&amp; drs.Length != 0)
            ret = drs[0][&quot;KeyValue&quot;].ToString();
    }
    return ret;
}</pre>
<p>And here is the logic after...</p>
<pre class="brush: csharp">public static string GetConfigValue(string key)
{
    string ret = null;
    Dictionary settings = GetConfig();
    try {
        ret = settings[key.ToString().Trim().ToLower()]; //avoid excessive check/get, rely on exception.
    } catch(Exception ex) {
        EventLogger.HandleException(ex, &quot;Log Only Policy&quot;);
    }

    return ret;
}</pre>
<p>Basically this comes down to, &quot;don&apos;t use a dump truck to deliver your mail.&quot;&#xA0; The DataTable is a fairly large object, and using the .Select() method a lot more overhead than using what equates to a hash-table index lookup.&#xA0; Now, you may notice that I use a try/catch block in place of checking to see if a given key exists.&#xA0; This is because I expect the key to be there every time, and only need the catch block as a bit of protection.&#xA0; Checking on settings.ContainsKey() would mean the index for the Dictionary would be searched twice.&#xA0; Because this method is called many times, by many users, on many pages, even the near insignificant amount of performance difference in the before and after of this method add up to seconds on the load of various pages.</p>