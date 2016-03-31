---
id: 86643862-2c3b-495d-bbcc-4db69d5f4059
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: MySite-Part-1
slug: mysite-part-1
title: MySite - Part 1
description: "My goal is to create a personal website application that implements the features needed, and wanted for someone who wants to create a personal site that extends beyond just a blogging engine.  I've been wanting to work with ASP.Net MVC and some other technologies, so I'll be focusing on using them in MySite."
date: 2008-11-11T22:14:00.000Z
modified: 2008-11-11T22:14:00.000Z
tags:
  - mysite
  - blog
  - asp.net
  - mvc
categories:
  - .Net
  - Architecture
  - ASP.Net
  - ASP.Net MVC
  - Databases
  - JavaScript
  - jQuery
  - Web Development
---

<p>My goal is to create a personal website application that implements the features needed, and wanted for someone who wants to create a personal site that extends beyond just a blogging engine.&#xA0; I&apos;ve been wanting to work with ASP.Net MVC and some other technologies, so I&apos;ll be focusing on using them in MySite. [more]</p>
<p>I&apos;ll be wanting to implement the following features:</p>
<ul>
<li>Minimal CMS interface.</li>
<li>The ability to run in a single publisher site configuration, as well as a family and friends mode.</li>
<li>A public gallery, with user-customizable areas, and images available in multiple areas.</li>
<li>A public comment system that allows for OpenID posting, as well as post validation.</li>
<li>A resume builder.</li>
<li>A blog engine, with the features available in <a href="http://www.dotnetblogengine.net/" test="true">BlogEngine.Net</a> </li>
<li>Downloadable Themes</li>
</ul>
<p>I intend to use the following technologies:</p>
<ul>
<li>ASP.Net MVC</li>
<li>SQLite.Net</li>
<li>jQuery</li>
<li>OpenID </li>
</ul>
<p>I realize there is a <a href="http://www.asp.net/downloads/starter-kits/personal/" test="true">Personal Site Starter Kit for ASP.Net</a>, though it does have several flaws.&#xA0; Firstly, it&apos;s designed in such a way that it expects most users to have an account in the system.&#xA0; I feel that a personal website first, and formost should concentrate on what it will offer the public.&#xA0;  <img style="float: right; margin-left: 1em; margin-bottom: 0.5em" src="./files/New%20ASP.Net%20MVC%20Web%20Application.png" alt="" test="true"> Second, it doesn&apos;t contain any kind of blog tie in, which is a pretty serious shortcoming.&#xA0; My goal will be to create something similar to the Personal Website Starter Kit, but add the missing blogging functionality, as well as make the internal login process more for accounts that will be publishing content.&#xA0; Content publishers will use internal accounts for logging in.&#xA0; For posting comments and other visitor functions, I&apos;ll be incorporating <a href="http://openid.net/" test="true">OpenID</a>.&#xA0; I&apos;ll be making a control for logging in that should make it more transparent for users of existing OpenID providers, which now includes Yahoo, AOL, and Microsoft&apos;s Live.&#xA0; Pretty much everyone online has an OpenID, even if they don&apos;t know it.</p>
<p>I&apos;ve decided to use SQLite.Net as the database, since it is light, portable, and cross-platform.&#xA0; This will probably not scale to epic proportions, but should do well enough for most blogs.&#xA0; In terms of behavior and configuration, I&apos;ll be referencing several other blog posts.&#xA0; Here are a few worth looking at.</p>
<ul>
<li><a href="http://pietschsoft.com/post/2008/08/Custom-Themes-in-ASPNET-MVC-Updated-for-Preview-5.aspx" test="true">Using themes in ASP.Net MVC</a></li>
<li><a href="http://www.hanselman.com/blog/jQueryToShipWithASPNETMVCAndVisualStudio.aspx" test="true">jQuery to ship with ASP.Net MVC and Visual Studio</a></li>
<li><a href="http://haacked.com/archive/2008/11/05/donut-caching-in-asp.net-mvc.aspx" test="true">Donut Caching in ASP.Net MVC</a></li>
<li><a href="http://blog.maartenballiauw.be/post/2008/07/01/Extending-ASPNET-MVC-OutputCache-ActionFilterAttribute-Adding-substitution.aspx" test="true">ASP.Net MVC OutputCache Substitution</a></li>
<li><a href="http://amrelsehemy.net/post/2008/09/21/Introducing-jBlogMvc.aspx" test="true">jBlogMVC, a blog engine in ASP.Net MVC with jQuery</a></li>
<li><a href="http://aspalliance.com/1630_Building_a_Simple_Blog_Engine_with_ASPNET_MVC_and_LINQ__Part_4" test="true">Building a Simple Blog Engine with ASP.NET MVC and LINQ</a></li>
</ul>
<p>The above are just some considerations in terms of creating this application.&#xA0; If you aren&apos;t familiar with ASP.Net MVC, you can check out some of the videos on the <a href="http://www.asp.net/MVC/" test="true">ASP.Net MVC website</a>.&#xA0;</p>
<p>To get started, the following items need to be downloaded and installed.</p>
<ul>
<li>Visual Studio 2008 or the free <a href="http://www.microsoft.com/express/vwd/" test="true">Visual Web Developer 2008 Express</a>&#xA0;</li>
<li><a href="http://www.asp.net/MVC/" test="true">ASP.Net MVC Beta</a></li>
<li><a href="http://sqlite.phxsoftware.com/" test="true">SQLite.Net Data Provider</a></li>
<li>jQuery and the Visual Studio documentation file from the <a href="http://docs.jquery.com/Downloading_jQuery" test="true">jQuery website</a>.</li>
</ul>
<p>There may well be more tools needed, but this is where I am starting from.&#xA0; I first create my ASP.Net MVC Web Application in Visual Studio. After creating the MVC app, I select to create an associated unit testing project.&#xA0; After this, I add a MySite.Data project to the solution as well.</p>
<p>My next post will contain my plans for organizing data, and starting the creation of the data access later.&#xA0; I won&apos;t be using the Entity framework, or LINQ simply because I intend to have separate databases for sitewide configuration and authentication, with each content user having their own separate database.&#xA0; This may be a somewhat premature optimization, but should allow for slightly better scaling with the SQLite database(s).</p>
<p>&#xA0;</p>