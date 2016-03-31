---
id: f7b05694-7914-4cbd-a0af-8a67c9b69fbc
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: Mapping-windows-volume-for-keyboards-without-media-keys
slug: mapping-windows-volume-for-keyboards-without-media-keys
title: Mapping windows volume for keyboards without media keys
description: ''
date: 2011-10-07T12:22:00.000Z
modified: 2011-10-07T12:22:00.000Z
tags: []
categories:
  - Hardware
---

<p>Okay, I&apos;ve been using this for quite a while now, but figured it should be useful for those who aren&apos;t me.  I&apos;m currently using a <a href="http://www.pckeyboard.com/" test="true">Unicomp</a> <a href="http://pckeyboards.stores.yahoo.net/customizer.html" test="true">Customizer 104</a> key keyboard at work, and home.  These keyboards do not have media keys on them, which is fine since I rarely use anything other than the volume controls on them.</p>
<p>There is a program called <a href="http://www.autohotkey.com/" test="true">AutoHotKey</a> that can run scripts based on various keyboard inputs, or hotkey combinations.  I&apos;m using the script below to match the Super/Windows key + [, ] and \ to volume down, up and mute respectively.</p>
<pre>;; Map WIN + [ to Volume Down
#[::Send {Volume_Down 2}

;; Map WIN + ] to Volume Up
#]::Send {Volume_Up 2}

;; Map WIN + \ to toggle mute
#\::Send {Volume_Mute}</pre>
<p>I should state that I am not affiliated with either Unicomp or Autohotkey.  This is because it was helpful to me, and took a while to find this, and figured it would be helpful to others as well.</p>