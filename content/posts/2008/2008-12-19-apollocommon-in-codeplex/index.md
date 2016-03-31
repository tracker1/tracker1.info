---
id: 0068c815-bd84-47c8-931d-bc515d0752f6
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: ApolloCommon-in-Codeplex
slug: apollocommon-in-codeplex
title: Apollo.Common in Codeplex
description: Apollo.Common is meant to provide some easier to use functionality to enterprise applications.
date: 2008-12-19T04:53:00.000Z
modified: 2008-12-19T04:53:00.000Z
tags:
  - enterprise library
  - enterprise
  - configuration
  - logging
  - cache
  - memcached
categories:
  - .Net
  - Architecture
  - ASP.Net MVC
  - 'C#'
  - Web Development
---

<p>The past few weeks, I&apos;ve been working on <a href="http://www.codeplex.com/ApolloCommon" test="true">Apollo.Common</a>, which is meant to provide some easier to use functionality to enterprise applications.&#xA0; A lot of this functionality, and more is provided by the MS PnP team&apos;s Microsoft <a href="http://www.codeplex.com/entlib" test="true">Enterprise Library</a>.&#xA0; However, ent-lib tends to be overly complex, difficult to use, and require a lot of customization before you can get moving.&#xA0; I want Apollo.Common to be easy to use, implement and deploy with a minimal learning curve. [more]</p>
<p>Apollo.Common.Cache started off as a means of providing a simple, consistant method of accessing memcached servers in <a href="http://www.apollogrp.edu/" test="true">our</a> <a href="http://www.phoenix.edu/" test="true">applications</a>.&#xA0; The cache piece is based on the BeIT memcached client, and is extended to support generics, as well as a callback pattern [<span style="color: #115555">MC.Cache.Get&lt;T&gt;(string key, Func&lt;T&gt; ifNullCallback)</span>], which reduces a lot of code, apposed to a Get/Check/Set/Return pattern repeated within the applications.&#xA0; <a href="http://www.codeplex.com/ApolloCommon/Release/ProjectReleases.aspx?ReleaseId=20680" test="true">This piece is already available</a>, but as a result of working on this peice spawned two other areas of concern.&#xA0; One is a common configuration library.&#xA0; Another is a common logging library.</p>
<p>Apollo.Common.Configuration is intended to decouple settings from applications.&#xA0; Allowing a single directory with configuration files to be set in a single place across an entire webfarm.&#xA0; This way applications can be installed, without needed to update/edit, or otherwise change configuration files.&#xA0; It also allows for common settings, such as logging, memcached, database strings, etc to be configured consistantly in different applications, on the same or different servers in a consistant way.&#xA0; The configuration files can be named with a {configname}.{environment}.{application name}.{application version}.config pattern, and have narrow, and broad configuration files available.&#xA0; There is an option to configure these settings within the application, or web.config files.&#xA0; Environment will be determined based on the app config, environment variable, http request app hostname, machine dns name, machine name in that order.&#xA0; For the machine dns name, if the name begins with QA or DEV, or has .qa or .dev in the name it will use the appropriate environment.&#xA0; If it is in debug mode, it will fallthrough to LOCAL, otherwise it will fallthrough to PRODUCTION.&#xA0; This happens on first access via an application, and is saved in memory.&#xA0; This makes the library very flexible out of the box, while reducing pain in implementation and use. &#xA0; I still have a few things to flush out, but it&apos;s going fairly smoothly.</p>
<p>Apollo.Common.Logging is a simple wrapper for NLog, that uses Apollo.Common.Configuration to determin the configuration file (in NLog settings format) that should be used. &#xA0; This piece has the most work left to be done.&#xA0; I wanted to make it as easy as possible to add logging into the application, while providing the flexibility that the common configuration piece offers.</p>
<p>I hope to get quite a bit more done in this library.&#xA0; Including supporting a ASP.Net Session, and Cache piece within the cache library.&#xA0; I&apos;ve received a lot of feedback already from some of the development teams and managers here, and will work towards integrating some of the suggestions.&#xA0; I&apos;ve also outlined some of the todo pieces within the wiki-style pages within the codeplex project.</p>