---
id: d435b142-f556-4152-bc7b-357a2a174000
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: Generic-Literals-in-VBNet-2010
slug: generic-literals-in-vbnet-2010
title: Generic Literals in VB.Net 2010
description: ''
date: 2011-03-31T12:57:00.000Z
modified: 2011-03-31T12:57:00.000Z
tags: []
categories:
  - .Net
  - Visual Basic
---

<p>Okay, something very cool in VB.Net as of VS2010 is that you can use literals for assignments to generic collections...</p>

<pre class="brush: vb">&apos;List from Literal
Dim myList As New List(Of Integer)() From {1,2,3,4,5}

&apos;Dictionary from Literal
Dim myDic As New Dictionary(Of String, Integer)() From {
    {&quot;key1&quot;, 1},
    {&quot;key2&quot;, 2}
}
</pre>

<p>Then when trying to load with Tuple&apos;s as the value, I ran into a snag, since it didn&apos;t understand the conversion of the tuple literal values.  I found that by creating the needed extension methods into <a href="./files/TupleExtensionsForGenericCollectionsModule.vb.txt" test="true">this module</a> that I could do what I wanted to accomplish.</p>

<pre class="brush: vb">Dim myQueue= New Queue(Of Tuple(Of Integer, Integer)) From {
    {19, 63},
    {20, 63}
}</pre>

<p>As you can see, it really isn&apos;t so difficult to use, but can be really useful when using paired values in a given collection.  Generic classes such as Tuple, and Generic collections can help a lot in data iteration.</p>

<br>
<p><a href="./files/TupleExtensionsForGenericCollectionsModule.vb.txt" test="true">TupleExtensionsForGenericCollectionsModule.vb.txt (4.45 kb)</a></p>