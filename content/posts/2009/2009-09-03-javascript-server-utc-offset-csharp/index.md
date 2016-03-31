---
id: 132a17b4-a2e1-4bb7-92bb-7aa89d793576
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: javascript-server-utc-offset-csharp
slug: javascript-server-utc-offset-csharp
title: 'Getting the Server-Side Offset to the JavaScript Epoch in C#'
description: Sometimes you just need to get the usable offset from the server-side point of view in JavaScript.
date: 2009-09-03T16:50:00.000Z
modified: 2009-09-03T16:50:00.000Z
tags:
  - javascript
  - csharp
  - 'c#'
  - offset
categories:
  - .Net
  - JavaScript
---

<p>Just in case anyone else needs it, here&apos;s my method for getting the millisecond offset of a server&apos;s local time to UTC time in milliseconds, for use in client-side JavaScript.</p>
<pre class="brush: csharp">private int ServerSideJsUtcOffset
{
    get {
        DateTime epoch = new DateTime(1970,1,1);
        int offset = (int)epoch.ToUniversalTime().Subtract(epoch).TotalMilliseconds;
        return offset;
    }
}</pre>
<p>There&apos;s really not much to it, it&apos;s mainly so that I can handle converting serialized dates to a proper local time on the client.  The DateTime objects in question are stored in a database as the UTC date-time, via an ORM tool, and sent to the client with System.Web.Script.Serialization.JavaScriptSerializer.  All the server-side code uses the same ORM tool, and all the client-side JSON is processed via the same local parser.  So it was simply easier adjusting the client-side parser than it was to adjust the server-side class hierarchy.</p>
<p>I should note that I could have set the initial date to DateTime.Now instead of implicitely using the JS epoch, as the difference would be the same for any localized DateTime, just felt the clarity was worth it.</p>