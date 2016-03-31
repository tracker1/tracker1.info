---
id: c9a77b97-92b2-4452-aa77-b9c9ed98e691
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: SQL-vs-Non-Relational-(NoSQL)-Databases
slug: sql-vs-non-relational-nosql-databases
title: SQL vs Non-Relational (NoSQL) Databases
description: ''
date: 2012-07-16T11:47:00.000Z
modified: 2012-07-16T11:47:00.000Z
tags: []
categories:
  - NoSQL
  - SQL Server
---

It really depends on the application... If you have, for instance, a classifieds site... in a typical database (acid/sql) you would have many tables, with many joins typical to retrieve the data you want for a simple page view.  In a no-sql environment, you would probably want 3 base collections, one for accounts, one for articles, one for payments (though payment systems are better suited to SQL than Non-Relational DBs).  With SQL, when you request a page, you will query against the article table, then join the various property tables, for the type of article for tags/options/etc... you may join against the account table for contact information, if very normalized, you may then join again for email addresses, phone numbers, addresses etc.  Each of these lookups will query against multiple tables&apos; indexes (provided they&apos;re properly indexed) to retrieve related records to be collated into a single object model, to then be rendered to the output.  ORMs take care of a lot of this heavy lifting, but on millions of results, there is an impact. With a Non-Relational DB, all related information is usually a full serialized object graph of everything related to that article, with specific options/properties codified making the data store &quot;dumb&quot;.
<br><br>
Now for searching... with SQL these queries will only ever run as fast as a single process on a single system can execute results.  With non-relational systems this can typically be split/spread across many servers for an aggregated result.  In the real world, with SQL, you will typically load several replicated (often read-only) servers as a front for your search queries, and for display lookups.  With NoSQL, you will typically scale your data across several servers.  This brings us to caching.  With SQL, when you need very large volume support, you will generally fall back to a caching system such as memcached, you may even cache your output rendering (full, partial and/or doughnut).  With NoSQL you don&apos;t generally need cached results for data, but may still do output caching.  Ironically, more and more, read-only data stores are now being fronted with the object graph in no-sql for faster lookups, with the SQL db as the authority, and the application persisting to both...
<br><br>
Transactional data... when dealing with highly transactional data (often Money data), SQL is usually better suited, as many Non-Relational DBs don&apos;t support atomic+consistent commits.  With No-SQL, you can work around this by using a MessageQueue system as an authority for transactional updates, that ensures only one at a time goes through.
<br><br>
NoSQL is better at non-transactional data where read/lookup speed is king.  NoSQL is better at serialization of codified objects.  NoSQL is worse at transactional systems.  SQL is better at transactional systems, and has a simpler query system to use (compared to Map/Reduce).  SQL has performance penalties for multi-table joins and often requires additional technology to scale well...  
<br><br>
In closing, each *can* do a given job, but a complete solution requires different implementations.  In my own humble opinion, for a public facing website, having your front-end backed by a Non-Relational DB is usually a better use case. YMMV.