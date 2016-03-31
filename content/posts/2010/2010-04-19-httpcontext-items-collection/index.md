---
id: ac910e9d-0d01-4b2c-bbde-f874e74608ee
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: HttpContext-Items-Collection
slug: httpcontext-items-collection
title: HttpContext Items Collection
description: ''
date: 2010-04-19T11:07:00.000Z
modified: 2010-04-19T11:07:00.000Z
tags:
  - httpcontext
  - request
  - lifecycle
  - data
categories:
  - .Net
  - Architecture
  - ASP.Net
  - ASP.Net MVC
  - Web Development
---

<p>Just a short little post, I do intend to followup my last post with a post with code on combining/minifying your JavaScript and CSS, this just caught my attention, and wanted to mention it.&#xA0;</p>
<p>In the process of doing some technical screenings, it is really suprising how many people don&apos;t understand or even know about the <a href="http://odetocode.com/Articles/111.aspx" test="true">HttpContext Items Collection</a> in ASP.Net.&#xA0; [more]Essentially, if you have any point in a request lifecycle, you need to store information to be consumed at another point, the HttpContext Items is probably at least a strong consideration of where to put that object.&#xA0; In the past, I&apos;ve launched several worker threads in the Page Load event, that will put their data into the HttpContext Current once they are done, for use within the controls on a page... in the PreRender, I&apos;ll wait for each of those threads to finish their work.&#xA0; This is helpful for those times when you have multiple remote resources to acquire information from in order to be used within a page.&#xA0; Since most of the time is spent waiting on remote resources, it&apos;s better to run them all at once, vs. running them in serial.&#xA0; In parallel, the request(s) will take slightly longer than the longest request.&#xA0; In serial, it would take the sum of all the remote requests.</p>
<p>I&apos;ve also used the Context.Items to store a reference to a script object that will build a collection of scripts to be included within a page (at the bottom), so that each control can reference the scripts it needs included.&#xA0; I&apos;m now using a different technique for most of the web applications I am working on, just the same it&apos;s worth knowing.</p>
<p>Many developers I&apos;ve seen coming from the Java world will attach items to the current thread.&#xA0; This is dangerous in the scope of an ASP.Net application, as each event in the ASP.Net request lifecycle isn&apos;t guaranteed to run under the same thread, and in fact under load, may well not.&#xA0; This can lead to data leaking out of the intended scope, where HttpContext&apos;s Items collection will carry forward with the request lifecycle.</p>