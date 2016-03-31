---
id: e2c1071f-dfa0-4c1b-a472-ffba8c379224
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: Creating-A-Modern-Web-Application-Part-1-(Getting-Started)
slug: creating-a-modern-web-application-part-1-getting-started
title: Creating A Modern Web Application - Part 1 (Getting Started)
description: ''
date: 2010-10-25T15:26:00.000Z
modified: 2010-10-25T15:26:00.000Z
tags: []
categories:
  - CSS
  - Design
  - JavaScript
  - Web Development
---

<p>This series is meant to be a pragmatic look at creating a modern web application today. What this means to me is that older browsers still need to be supported. In some environments the use of Internet Explorer 6 is still well over 20%, especially in corporate environments where XP and IE6 are the standards they are bound by. Though dealing with a browser that is quickly reaching a decade in age, which is ancient by software standards that tend to churn a new generation every 2 years or so, there is hope. I&apos;ll be referencing IE versions 6-8 as IEOLD, since these really are the existing legacy of IE as it stands. IE 9 is shaping up to be a much more compliant browser that has a great UI and does a much better job of rendering content. There are a few quirks as it stands that I will point out in the next segment in this series, I&apos;ll be referring to IE9+ as IENEW.</p>
<p>In this exercise we will be using <a href="http://dev.w3.org/html5/spec/Overview.html" test="true">HTML5</a>&apos;s DOCTYPE  tag which is very simple and straight forward. In fact it&apos;s the first DOCTYPE  I actually committed to memory, (&lt;!DOCTYPE html&gt;) how cool is that. HTML5 by definition is very pragmatic in and of itself. The main lesson in HTML5 is to use what works for you, as many browsers have created enhancements for their own needs and then copied them from each other.  Starting with <a href="http://www.whatwg.org/" test="true">WhatWG</a> and moving into the W3C&apos;s group as a movement to formalize these enhancements as a standard, that doesn&apos;t mean you shouldn&apos;t be utilizing it today. Moving forward I will be using several HTML5 tags, in addition to using CSS3 to avoid the use of images for simple gradients and rounded corners. In order to facilitate this, I&apos;ll be first adding two shining stars into my tool-belt.</p>
<p>The first of which is the wonderful <a href="http://code.google.com/p/html5shiv/" test="true">html5shiv</a>. This allows us to utilize the new tags defined as part of HTML5. As there are several new tags within the HTML5 space, it is much better to use these as a more semantic means of marking up our site, over simply using meaningless DIV tags with class attributes everywhere. The html5shiv is a fairly light script that will add support for these new tags in old IE versions (prior to 9). You will also want to take a look at <a href="http://jdbartlett.github.com/innershiv/" test="true">html 5 innershiv</a> if you intend to inject these new elements via the innerHTML DOM property.</p>
<p>The second tool we will be using is the <a href="http://css3pie.com/" test="true">CSS3PIE</a> (Progressive IE) HTML Component which can be used with IE versions prior to 9. By defining behaviors against elements that will utilize background gradients and rounded borders for IEOLD, we will be able to eliminate the need for the use of images, and complex layouts to achieve these commonly used effects.</p>
<p>Though both of these tools have been out for a while, I hope you find them useful. I&apos;m outlining the series below, and will inject the links as these articles become live on the site. My goal is to have a the first eight articles in this series (including this one) released in the next two weeks.</p>
<ul>
<li><strong>Part 1 - Getting Started.</strong></li>
<li> <strong><a href="http://frugalcoder.us/post/2010/10/28/modern-web-apps-part002.aspx" test="true">Part 2 - Working with HTML5 and CSS3.</a></strong><br> In this article we&apos;ll work through how to utilize rounded corners and border radius properties as well as show how to deal with the issues that IE9 currently presents here in addition to utilizing Chrome Frame for those users that have it installed. </li>
<li> <strong>Part 3 - Getting the page laid out.</strong><br> In this article we&apos;ll work on getting the overall page layout in place. This will include standardizing on our core fonts as well as utilizing a grid to keep our stuff lined up nicely. </li>
<li> <strong>Part 4 - Buttons, buttons and more buttons.</strong><br> One of the most often stylized elements on any web based application is the button. The real question is, how we get them how we want them, along with some thoughts on tying buttons to inputs. </li>
<li> <strong>Part 5 - Ironing out the wrinkles.</strong><br> We will now work on getting things a bit better organized. We&apos;ll also deal with a few IE6 specific issues, namely the lack of attribute based selectors in CSS. </li>
<li> <strong>Part 6 - Getting your script on.</strong><br> In this article we&apos;ll get some initial functionality laid out in order to work through progressive enhancement as well as making sure to defer our scripts until after the content is ready for it. </li>
<li> <strong>Part 7 - Holy JavaScript Tool-belt Batman.</strong><br> Here I discuss my fairly comprehensive list of scripts I&apos;ll be including, as well as mention some that I&apos;m not actively using but will be there if you need them. </li>
<li> <strong>Part 8 - Inputs and Validation.</strong><br> Now that I have my JavaScript Tool-belt in place, I&apos;ll work through dealing with some basic input validation. </li>
<li> <strong>Part 9 - Enhancing Inputs.</strong><br> Here I&apos;ll create an enhanced input that will allow for a calendar control used in conjunction with a date validated input. </li>
<li> <strong>Part 10 - Custom Notifications.</strong><br> In my current position notifications of input validation errors and other messages are shown in popover modal dialogs that purposefully interrupt the user&apos;s actions. Here we&apos;ll work through the initial creation of such a popover and extend the jQuery validation to support this behavior. </li>
</ul>
<p>I&apos;ll be adding additional articles in the future; the topics will present themselves as this project moves forward.</p>