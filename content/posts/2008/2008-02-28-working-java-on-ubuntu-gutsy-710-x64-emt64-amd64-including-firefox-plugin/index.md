---
id: c33c5ce0-990a-41ca-a33d-107c400218cc
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: Working-Java-on-Ubuntu-Gutsy-710-x64-(EMT64-AMD64)-Including-Firefox-Plugin
slug: working-java-on-ubuntu-gutsy-710-x64-emt64-amd64-including-firefox-plugin
title: 'Working Java on Ubuntu Gutsy 7.10 x64 (EMT64, AMD64) - Including Firefox Plugin'
description: ''
date: 2008-02-28T03:18:00.000Z
modified: 2008-02-28T03:18:00.000Z
tags: []
categories:
  - Java
  - Ubuntu
---

<p>Sun&apos;s Java doesn&apos;t have a working 64-bit plugin, and the IcedTea version included with Ubuntu Gutsy 7.10 doesn&apos;t work properly... however loading a newer version will resolve the issue.&#xA0; Note, not all java applets will work, but most of the ones I have tried work without issue. [more]&#xA0;</p>
<p>First, you need to add the following repositories to your /etc/apt/sources.list ...</p>
<pre class="brush: bash">deb http://people.ubuntu.com/~doko/ubuntu/ gutsy/ deb-src http://people.ubuntu.com/~doko/ubuntu/ gutsy/</pre>
<p>This can be done with vi, nano or directly through synaptic.. after you have added these, run..</p>
<pre class="brush: bash">sudo apt-get update 
sudo apt-get install icedtea-java7-bin icedtea-java7-jre icedtea-java7-plugin</pre>
<p>Restart Firefox and enjoy working java applets.</p>
<p>If you need a solution for Flash under x64, <a>click here.</a></p>