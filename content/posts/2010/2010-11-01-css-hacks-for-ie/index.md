---
id: e4b99b16-330f-4087-b349-ee5fda8a35e3
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: CSS-Hacks-for-IE
slug: css-hacks-for-ie
title: CSS Hacks for IE
description: ''
date: 2010-11-01T18:24:00.000Z
modified: 2010-11-01T18:24:00.000Z
tags: []
categories:
  - CSS
  - Web Development
---

<p>The following are a few techniques you can use to target specific IE versions via CSS markup.</p>
<pre class="brush: css">TAGIDENTIFIER {
    property:  valueA;   /* all browsers, of course */
    property:  valueB\9; /* IE9 and below, the 9 has nothing to do with the version in place */
    *property: valueC;   /* IE7 and below */
    _property: valueD;   /* IE6 */
}

/* IE6 ONLY */
    * html TAGIDENTIFIER

/* IE7 ONLY */
    *:first-child+html TAGIDENTIFIER

/* Modern Browsers &amp; IE7+ */
    html&gt;body TAGIDENTIFIER</pre>
<p>
I would like to point out that using IE conditional comments is still the best way to address specific browsers, it&apos;s just worthwhile to know about these techniques.
</p>