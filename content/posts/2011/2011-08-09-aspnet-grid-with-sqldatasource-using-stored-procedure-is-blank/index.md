---
id: 5725554d-85d4-4222-a181-b574052c0aed
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: ASPNet-Grid-with-SqlDatasource-using-Stored-Procedure-is-Blank
slug: aspnet-grid-with-sqldatasource-using-stored-procedure-is-blank
title: ASP.Net Grid with SqlDatasource using Stored Procedure is Blank
description: ''
date: 2011-08-09T10:25:00.000Z
modified: 2011-08-09T10:25:00.000Z
tags: []
categories:
  - ASP.Net
  - SQL Server
  - T-SQL
---

<p>After a lot of searching, I finally found the answer <a href="http://forums.asp.net/t/951579.aspx/2/10?Using+GridView+with+stored+procedure+in+datasource+does+not+work" test="true">here</a>.  It seems that when you are using an SqlDataSource that when a parameter is null, it will cancel a select by default.  You need to add the attribute of <code><b>CancelSelectOnNullParameter=&quot;false&quot;</b></code>.  It was very frustrating, as using the SQL Server Profiler, the query wasn&apos;t even being issued, and it was a pain to track down.</p>
<p>I&apos;m putting this up here, to hopefully help others with a similar situation in the future.</p>
