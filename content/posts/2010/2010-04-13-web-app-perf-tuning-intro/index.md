---
id: 3c00fdf9-0c6a-495c-a013-d39472608c76
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: web-app-perf-tuning-intro
slug: web-app-perf-tuning-intro
title: Packaging JavaScript
description: "Some general tips on how I'm tuning for web based applications."
date: 2010-04-13T10:59:00.000Z
modified: 2010-04-13T10:59:00.000Z
tags:
  - javascript
  - web
  - applications
  - performance
categories:
  - ASP.Net
  - CSS
  - JavaScript
  - Web Development
---

<p>I&apos;ve been working on a number of web based applications recently, and have taken to using a few techniques that I thought I would share.  I won&apos;t be sharing the code so much, which is ASP.Net centric, but will discuss what I am trying to accomplish.[more]</p>
<p>First, I am using two <span style="font-family: courier new,courier;">.ashx</span> handlers, one is AllStyles.ashx, the other is <span style="font-family: courier new,courier;">AllScripts.ashx</span>.&#xA0; They both work similarly, one for stylesheets, the other for scripts.&#xA0; I have a static list of files that are to be included for the application, as well as a handful of static methods to be used within the master pages.&#xA0; The master page calls a static method on the <span style="font-family: courier new,courier;">AllScripts.ashx</span> (for example) which will then perform one of two actions depending on the environment.&#xA0; If it&apos;s in debug mode, it will include an individual script tag for each script listed.&#xA0; If it&apos;s in release mode, it will include a script tag pointing to the ashx itself.&#xA0; When the ashx is called, it will return a minified compilation of all of the files in the list.&#xA0; I have additional logic which maintains the DateTime of the last modified file in the list, and will match that against the <span style="font-family: courier new,courier;">If-Modified-Since</span> header, and return a <span style="font-family: courier new,courier;">304</span> (unchanged) response if there&apos;s a match.&#xA0; The minified version of the response is also kept in a static variable.&#xA0; This could use a caching system, but since this file is relatively small, and called fairly often, I feel it isn&apos;t harmful to use a static var vs. a cached version.</p>
<p>What this does is reduce the number of HTTP requests, as well as return a minified version in production, while using the original, un-minified versions in development.&#xA0; I have the ashx static methods check for a couple of querystring parameters.&#xA0; If the querystring parameter <span style="font-family: courier new,courier;">allscripts=min</span>, it will use the minified/single version, regardless of environment.&#xA0; If <span style="font-family: courier new,courier;">allscripts=full</span>, it will use the full/direct script tags, regardless of environment.&#xA0; There are also querystring parameters for <span style="font-family: courier new,courier;">AllScripts.ashx</span> when called directly as well.&#xA0; <span style="font-family: courier new,courier;">?action=list</span> will return a list of the included files, for example.&#xA0; By adding these couple of extra features, you can still inspect the values that are being called/returned for scripts and stylesheets.</p>
<p>There are a couple of gotchas, however.&#xA0; I&apos;m injecting a couple of semi-colons (;) after each script file, as well as a line with a comment for the name of the file that&apos;s being included.&#xA0; The css compression was a bit hairy, mainly because of the changes to relative paths regarding images.&#xA0; I needed to use the base application path, and base file path against the relative path to the original css, to adjust any <span style="font-family: courier new,courier;">url()</span> values within the stylesheets.&#xA0; That was probably the most complicated piece.&#xA0; There are a number of JavaScript and CSS minifiers out there, I used fairly simple ones that didn&apos;t do code optimization, mainly whitespace and comment cleaning.&#xA0; With a general minification, and HTTP compression, I find the results very acceptable, there are places to optimize further, but I find the tradeoffs to be much harder in terms of the development process.</p>
<p>Because I am building web applications, I am less concerned about the load time of the first page, and more concerned about performance as one navigates through the application(s).&#xA0; With this in mind, I am following a fairly simple pattern, similar to the <a href="http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth" test="true">Module Pattern</a>, in order to include the functionality for all pages and controls into the general include script.&#xA0; What this means is after the first page is hit, each subsequent page will already have it&apos;s relevent static scripts included.</p>
<p>From here, the master page includes the allscripts, as well as a script entry with site-wide configuration values.&#xA0; (Localization strings, url templates, site mapping, etc).&#xA0; The page will include it&apos;s own activation script, to activate the module/method(s) used for the page itself, as well as the page&apos;s configuration values.&#xA0; I know this post is lighter on code, and heavier on words.&#xA0; I&apos;d be happy to followup with a post including the code I am using to accomplish this, if I get enough feedback.</p>