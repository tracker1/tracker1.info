---
id: 15034e71-890f-42eb-9d01-baf79abde7f4
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: progressive-enhancement-via-mvc
slug: progressive-enhancement-via-mvc
title: ASP.Net MVC and Progressive enhancement...
description: Thoughts on dealing with progressive enhancement with the ASP.Net MVC framework.
date: 2010-04-28T14:40:00.000Z
modified: 2010-04-28T14:40:00.000Z
tags:
  - web
  - asp.net
  - mvc
categories:
  - .Net
  - ASP.Net
  - ASP.Net MVC
  - JavaScript
  - Web Development
---

<p>I was reading <a href="http://ajaxian.com/archives/proposal-for-customizing-google-crawlable-ajax-urls/comment-page-1#comment-283325" test="true">an article</a> on <a href="http://code.google.com/web/ajaxcrawling/" test="true">Google&apos;s use of hash-bang</a> in order to provide a consistent means of Ajaxy content for crawling/display.  There are three points to resolve here.  1. Handling those cases where someone posts an ajaxy url, with the hash endpoint to facebook or twitter so that the search engines have a convention to handle these types of urls.  2. Being able to deal with the Ajaxy endpoint, the original content and the ajax callback content.  3. Being able to deal with those browsers that don&apos;t have scripting.</p>

<p>It got me thinking, how would one could work with progressive URL&apos;s via MVC and a few thoughts occurred to me. First, if the controller name is always the first portion of the url from the application base, if the MVC routing engine could simply replace the <code><b>?_escaped_fragment_=</b></code> portion of the uri to be equal to the original route.  For example <code><b>http://mysite/controller/action/1?_escaped_fragment_=/otheraction/2</b></code> would be equivalent to <code><b>http://mysite/controller/otheraction/2</b></code> on the backend.  Second, How difficult would it be for the default view engine to be transposed in the instances of an expected response type give html, vs js.  Similar to how WCF over http handles JSON via the same endpoints as XML.  I know this has been discussed in the past.</p>

<p>Where this leads me, is thinking it might be nice to have an ASP.Net MVC 2 based framework, with conventions for handling these scenarios as a default.  I like ASP.Net MVC quite a bit, and have followed Castle and Fubu as well.  I&apos;m merely thinking that it would be nice if there were a default starter kit towards creating a browser and search engine friendly Ajaxy application.  It really isn&apos;t easy.  I think that the google hash-bang solution leaves out the people that don&apos;t have scripting enabled, getting a hash-bang endpoint is near worthless, save for a <code><b>&lt;noscript&gt;script disabled indexable links here&lt;/noscript&gt;</b></code>.  And progressive enhancement (aka Hijax) techniques don&apos;t allow for a browser engine to properly index copy/pasted urls.  Having some level of convention to support both is necessary.  I think it&apos;s equally necessary for google to post the <code><b>_escaped_fragment_</b></code> based urls in the search results for those users who have scripting disabled.</p>