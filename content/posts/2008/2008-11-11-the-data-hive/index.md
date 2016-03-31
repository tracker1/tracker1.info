---
id: 84dc9bc6-21e4-4dca-9e08-4d78acb07c27
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: The-Data-Hive
slug: the-data-hive
title: The Data Hive
description: 'The future of scaling data, creating a Data Hive.  When you need to do logging, or write reports, have the data cache out to the rdbms, instead of the other way around.'
date: 2008-11-11T00:19:00.000Z
modified: 2008-11-11T00:19:00.000Z
tags:
  - databases
  - architecture
  - scaling
categories:
  - Architecture
  - Databases
---

<p>I&apos;ve had some ideas bouncing around in the back of my head for a few days now.&#xA0; One is that when using an application, specifically a large-scale web application, having a traditional RDBMS backend is a point of limitation in terms of scale.&#xA0; RDBMS systems are really good for being able to aggregate data, and create reporting interfaces, but it isn&apos;t so great from being able to use structured object data on the front end.&#xA0; Now I&apos;m talking about going beyond ORM mappers, and even beyond an Object Database here.&#xA0; What I see coming in the future is a Data Hive. [more]</p>
<p>Think about being able to request a serialized object view.&#xA0; You request the object based on the type, and an identifier.&#xA0; You don&apos;t care where it was stored, or even so much how it was stored in terms of the front end, you want your data.&#xA0; On the backend the hive client makes a request to the hive, that gets spread through the hive members, and one of said members makes a response stating it has said object/data.&#xA0; Then a more static connection is made to retreive this piece of data.&#xA0; Possibly having the hive traffic on a separate network, with very low level broadcast network calls for the request/response.&#xA0; I realize that this may be very chatty in terms of traffic, especially when more than one resource will actually have the data being requested.</p>
<p>The hard part will be having the most used data distributed in such a way that it is both widely available.&#xA0; In addition to distributing load to all the hive nodes.&#xA0; Also worth thinking about is how to replicate data to different networks, that will reside in different locations.&#xA0; In essense what is needed is something that is fast, reliable and scalable.&#xA0; Something like Memcached, with redundancy, and persistance added to it.</p>
<p>Some things to consider are...&#xA0; How to search for specific data, and maintaining lists, and updating said lists (indexes) within the hive.&#xA0; How to manage scaling deeper as well as wider.&#xA0; Having relays from one hive, to another, for the purpose of extending the data storage to deeper levels, in addition to wide hives.&#xA0; How to segment which data gets replicated, and/or passed to which layered hives. &#xA0; X-Tree indexing of paths, perhaps.&#xA0; X being the unknown, not for a cool version &quot;X&quot;.&#xA0; As whatever is used needs to have some dynamic redundancy to allow for multiple storage and query paths.</p>
<p>Most of these thoughts come from the fact that many large scale sites are using things like memcached, to store rendered content because the backend is too sluggish to keep up, instead of rethinking how to store things on the backend. &#xA0; You can add additional read-only databases for replication, then you are replicating data in excess of what is needed.&#xA0; You can separate data into paired nodes, then it&apos;s more difficult to get related data, without a worse performance hit, and loose the biggest benefits of RDBMS/SQL databases.&#xA0; You can pre-render content, or objects into a caching layer, but then you lose the persistance, and have to create fallbacks.&#xA0; I think the future is a better data interface that simply scales.&#xA0; When you need to do logging, or write reports, have the data cache out to the rdbms, instead of the other way around.</p>