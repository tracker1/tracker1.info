---
id: 26d6b151-2e67-482f-b6b8-607f9b533416
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: Setting-up-mod_mono-(ASPNet-20)-on-Ubuntu-710-(Gutsy-Gibbon)
slug: setting-up-mod-mono-aspnet-20-on-ubuntu-710-gutsy-gibbon
title: Setting up mod_mono (ASP.Net 2.0) on Ubuntu 7.10 (Gutsy Gibbon)
description: Instructions on setting up mod_mono under Ubuntu 7.10 (Gutsy Gibbon)
date: 2008-02-09T17:57:00.000Z
modified: 2008-02-09T17:57:00.000Z
tags:
  - mod_mono
  - mod_mono2
  - xsp
  - xsp2
  - asp.net
  - 'c#'
  - ubuntu
  - gutsy
categories:
  - ASP.Net
  - mod_mono
  - mono
  - Ubuntu
  - Web Development
---

<p>After spending a day on this, I figured it would be worthwhile information for anyone that may be interested in configuring mod_mono2 (ASP.Net) for Ubuntu Gutsy.&#xA0; I&apos;m personally using an Ubuntu JeOS base configuration.&#xA0; You may want to install your database of choice (mySQL, Firebird SQL, PostgreSQL, etc) in addition to other supported modules for apache2.&#xA0;[more]</p>
<p>First, you will want to install the necessary software...</p>
<pre class="brush: bash">sudo aptitude install apache2 mono mono-gmcs mono-utils mono-xsp2 monodoc-http libapache2-mod-mono mono-apache-server2</pre>
<p>Second, you will want to use the auto configuration, instead of the default configuration, this will make your life easier.<span style="font-family: courier new,courier;"><strong><br> </strong></span></p>
<pre class="brush: bash">     cd /etc/apache2/mods-enabled
    rm mod_mono*
    ln -s ../mods-available/mod_mono_auto.* ./ </pre>
<p>Next, you will need to set the config file to use mod_mono2 instead of the default mod_mono...</p>
<pre class="brush: bash">sudo nano mod_mono_auto.conf</pre>
<p>Prepend the following line to the top of the file... <strong></strong></p>
<pre class="brush: bash">MonoServerPath &quot;/usr/bin/mod-mono-server2&quot;</pre>
<p>You will need to restart apache after you have made this edit, in order to actually utilize mod_mono2.</p>
<pre class="brush: bash">sudo /etc/init.d/apache2 stop
sudo /etc/init.d/apache2 start</pre>
<p>Now all you need to do is have a ./bin directory and a web.config file in the root of any ASP.Net 2.0 web application.&#xA0; It&apos;s also worth noting that you will not be using the most current version of mod_mono when you use Gutsy, and you may wish to look at one of the many source installation instructions out there.&#xA0; Me, I just wanted something simple to be able to get up and going quickly, and acknowledge that I may not have the latest and greatest compatability.&#xA0;</p>
<p>If you are having any issues make certain that you have Apache2 configured properly, and check /var/log/apache2/error.log for any error notifications.</p>