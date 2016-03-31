---
id: 2f0bc482-c73a-4360-8251-45c352de83be
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: browser-detection
slug: browser-detection
title: Browser detection script
description: Simple browser detection script file.  Javascript detection of your current browser.
date: 2010-09-13T15:07:00.000Z
modified: 2010-09-13T15:07:00.000Z
tags:
  - javascript
  - browser
  - detection
categories:
  - JavaScript
  - Web Development
---

<div>
<div>
<p>This javascript will add a global <code><b>browser</b></code> object, with properties to match the current browser version.</p>
<p>Note: it does use <code><b>navigator.userAgent</b></code> strings for version detection.  It should be used for resolving browser UI quirks, not in place of feature testing.</p>
<p>You can output the detection (after it is loaded) to say a div with an id of diagnostics via:</p>
</div>
<pre class="brush: javascript">jQuery(function($){
    var bl = $(&apos;&lt;dl&gt;&lt;/dl&gt;&apos;);
    for (var x in browser) {
        if (!isNaN(browser[x] || undefined)) {
            bl.append(
                $(&apos;&lt;dt&gt;&lt;/dt&gt;&apos;).text(x)
            ).append(
                $(&apos;&lt;dd&gt;&lt;/dd&gt;&apos;).text(browser[x])
            );
        }
    };
    $(&apos;#diagnostics&apos;)    .append(&apos;&lt;br /&gt;&lt;br /&gt;&apos;)
                        .append(bl)
                        .append(&apos;&lt;br class=&quot;clear&quot; /&gt;&lt;br /&gt;&apos;);
});</pre>[more]
<div><p><b>Browser Detection Script</b></p></div>
<pre class="brush: javascript">/*============================================================================
Copyright (c) 2010, Michael J. Ryan  http://tracker1.info/
All rights reserved.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS &quot;AS IS&quot; 
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE 
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE 
ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE 
LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR 
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF 
SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS 
INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN 
CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF 
THE POSSIBILITY OF SUCH DAMAGE.
------------------------------------------------------------------------------

Browser matching for various browser.

    browser.ie
    browser.gecko
        browser.firefox
    browser.khtml
        browser.webkit
            browser.chrome
            browser.safari
    browser.opera

recommended:
    use browser.gecko over browser.firefox
    use browser.webkit over browser.chrome or browser.safari

============================================================================*/
(function(b){
    if (!navigator) return;

    //browsermatch method...
    function bm(re) {
        var m = (navigator &amp;&amp; navigator.userAgent &amp;&amp; navigator.userAgent.match(re));
        return (m &amp;&amp; m[1]);
    }

    //setup browser detection
    b.ie = parseFloat(bm(/MSIE (\d+\.\d+)/)) || null;
    b.gecko = parseFloat(bm(/Gecko\/(\d+)/)) || null;
    b.ff = parseFloat(bm(/Firefox\/(\d+\.\d+)/)) || null;
    b.khtml = parseFloat(bm(/\((KHTML)/) &amp;&amp; 1) || null;
    b.webkit = parseFloat(bm(/AppleWebKit\/(\d+\.\d+)/));
    b.chrome = parseFloat(b.webkit &amp;&amp; bm(/Chrome\/(\d+\.\d+)/)) || null;
    b.safari = parseFloat(b.webkit &amp;&amp; bm(/Safari\/(\d+\.\d+)/) &amp;&amp; bm(/Version\/(\d+\.\d+)/)) || null;
    b.opera = parseFloat(bm(/Opera\/(\d+\.\d+)/) &amp;&amp; bm(/Version\/(\d+\.\d+)/)) || bm(/Opera\/(\d+\.\d+)/) || null;

    //delete empty values
    for (var x in b) {
        if (b[x] === null)
            delete b[x];
    }

    //disable IE matching for older Opera versions.
    if (b.opera &amp;&amp; b.ie) delete b.ie;
}(this.browser = this.browser || {}));</pre>

</div>