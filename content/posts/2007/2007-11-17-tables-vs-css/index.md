---
id: 0338f1ff-97da-4f70-adc9-0bf5836b063c
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: Tables-vs-CSS
slug: tables-vs-css
title: Tables vs. CSS
description: ''
date: 2007-11-17T18:07:00.000Z
modified: 2007-11-17T18:07:00.000Z
tags:
  - css
  - tables
  - web
  - design
  - development
categories:
  - CSS
  - Design
  - Editorial
  - Tables
  - Web Development
---

<p>After reviewing the following recent blog postings (Top 30 popular websites <a href="http://web2.0flow.com/top-30-popular-websites-are-not-using-tables-as-main-layout-structure/" test="true">Using CSS</a> and <a href="http://web2.0flow.com/top-30-popular-websites-that-still-are-using-tables-as-main-layout-structure/" test="true">Using Tables</a>), I just want to state my own opinions regarding Tables vs. CSS based design. [more]</p>
<p>&#xA0;Okay, I will use tables for *SOME* design decisions.. if there are more than two items that need to be side by side, I will use tables&#x2026; I will not nest another element other than header, and anchor tags inside a table data element.</p>
<p>Why? Because CSS works best for an outer layout&#x2026; the main portions of a site can be worked out well with CSS&#x2026; At this point, I usually only need a main CSS sheet and one for IE6&#x2026; IE lower than 6 is not important&#x2026; Also, mixing stylesheet rules in nested tables in IE6 outside of XP will blow up, and not render if the page gets *too* big, where that is depends on the complexity of nesting and the content.. using CSS for the outer/main layout works best, sometimes based on information, tables work best for inner content&#x2026;</p>
<p>If you are incapable of realizing why tables are a bad idea for the majority of a layout/site, you are simply more of an artist than a true designer&#x2026; The design and development of web applications, and complex sites is best left to those with some basic understanding of an engineering, or architectural approach, which is to blend style with technique.. not all one or the other.</p>
<p>&#xA0;I plan on following up with a general approach I tend to use with layout design...&#xA0; For the most part a lot of the way I will do a site&apos;s layout is consistant... even with some varying look and feel.&#xA0; I really like to see a nice clean layout from the html side... it doesn&apos;t even take a complex stylesheet to accomplish.</p>