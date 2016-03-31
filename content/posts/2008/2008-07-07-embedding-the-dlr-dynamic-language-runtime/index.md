---
id: 0e22e427-4456-48f3-a240-0ba958b8adfc
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: Embedding-the-DLR-(Dynamic-Language-Runtime)
slug: embedding-the-dlr-dynamic-language-runtime
title: Embedding the DLR (Dynamic Language Runtime)
description: ''
date: 2008-07-07T12:03:00.000Z
modified: 2008-07-07T12:03:00.000Z
tags:
  - dlr
  - javascript
  - ironruby
  - ironpython
  - scripting
categories:
  - ASP.Net
  - DLR
  - Web Development
---

<p>Okay, so it isn&apos;t so much embedding as it is hosting.&#xA0; A lot of attention is going out to the use of the DLR for the upcoming Silverlight 2 release, which is great.&#xA0; However, what gets lost is the simple ability to use the DLR as a scripting environment for your own projects.&#xA0; [more]You can define an object model for use as at runtime, and even inject it into scripts that are set to be run.</p>
<p>What this comes down to, is a much easier method of adding scriptability to your own applications that anything that has come before it, at least imho.&#xA0; There are quite a few projects which use everything from spidermonkey, to the MS Scripting Engine (old, activex).&#xA0; What is exciting here is now you can create an environment for running scripts written in any number of languages.&#xA0; A generic service engine can now provide event, service and transaction layers without the need for recompilation in order to supply simple changes or fixes.</p>
<p>For some further reading check out the <a href="http://www.iunknown.com/2008/01/latest-dlr-host.html" test="true">DLR Hosting Spec</a>. There&apos;s a lot there, but it&apos;s a really good read.</p>