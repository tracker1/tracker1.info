---
id: 9d607088-675b-4f0c-9254-cbd02f5f6e1f
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: The-Data-Czar
slug: the-data-czar
title: The Data Czar
description: Just some thoughts on how to handle data services in larger organizations.
date: 2008-11-06T00:04:00.000Z
modified: 2008-11-06T00:04:00.000Z
tags:
  - databases
  - rdbms
  - development
  - astoria
categories: []
---

<p>Far too often in large organizations there is a disconnect between different DBAs, IT staff and application developers.&#xA0; I think what would be a good thing to see in increasing use would be a small handful of people that understand the mapping of various database schemas for applications within a large organization, and provide a common database interface. [more]</p>
<p>With the release of the <a href="http://msdn.microsoft.com/en-us/data/bb931106.aspx" test="true">ADO.Net Data Services Framework</a> (formerly Astoria), I think this could be a great bridge for such a beast.&#xA0; Simply offering a consistant set of endpoints for data services, for use with servers within an organization, with traffic restricted is much better in my opinion than having numerous web services exposing data from one system to another.&#xA0; A single interface, with a healthy redundancy that is, not to be confused with a single point of failure.&#xA0; Even if actual service end points within a common interface point to various legacy systems, and webservices, it makes a decent system moving forward.</p>
<p>The hard part is making progress, while maintaining communications with many different teams and departments.&#xA0; Such a Data Czar would have to have enough people to actually develop and maintain common interfaces, keeping communications with DBAs and IT staff in order to organize changes, as well as respond quickly to developer requests which will include scenarios that may not make it to production, and keeping track of changes that will ultimately be scrapped.&#xA0; Not to mention protecting sensitive information from being directly viewable.</p>