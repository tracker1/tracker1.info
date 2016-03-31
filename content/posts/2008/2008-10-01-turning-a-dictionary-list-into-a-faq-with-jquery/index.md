---
id: 75c33130-2b2b-4fa3-b21b-ad5a270fe882
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: Turning-a-Dictionary-List-into-a-FAQ-with-jQuery
slug: turning-a-dictionary-list-into-a-faq-with-jquery
title: Turning a Dictionary List into a FAQ with jQuery
description: 'Today I had to create a FAQ page.  In order to make this work nicely I started with a simple Dictionary List markup, and some jQuery sugar to make an expand/collapse list.'
date: 2008-10-01T14:59:00.000Z
modified: 2008-10-01T14:59:00.000Z
tags: []
categories:
  - JavaScript
  - jQuery
  - Web Development
---

<p>Today I had to create a FAQ page.&#xA0; In order to make this work nicely I started with a simple Dictionary List markup, and some jQuery sugar to make an expand/collapse list.&#xA0; Although I love prototype.js, jQuery&apos;s nesting and inline DOM object creation really comes in handy. [more]</p>
<p>Here is the html markup for the dictionary list (DL)</p>
<pre class="brush: html">&lt;dl class=&quot;faq&quot;&gt;
    &lt;dt&gt;Item 1&lt;/dt&gt;
    &lt;dd&gt;
        Description for Item 1 goes in here...
    &lt;/dd&gt;

    &lt;dt&gt;Item 2&lt;/dt&gt;
    &lt;dd&gt;
        Description for Item 2 goes in here...
    &lt;/dd&gt;
&lt;/dl&gt;</pre>
<p>The following style will presume that each DT (Dictionary Term) will have an EM tag for the arrow marker, and a STRONG tag for the actual text. The EM tag is forced to a unicode font, so that it will display properly and consistantly in Windows, you could also use images in place of the triangle characters in order to match your UI better.</p>
<pre class="brush: css">.faq dt {
    color:#444444;
}
.faq dt em {
    /*  Force unicode font for windows machines (XP or higher)
        Linux/Mac should work with Sans-Serif (default). */
    font-family:&apos;Arial Unicode MS&apos;, Sans-Serif;
    display:inline;
    height:1em;
    width:1em;
    overflow:hidden;
    font-style:normal;
}
.faq dt.over { color: #0000cc; }
 
.faq dd {
    margin: 0 0 0.3em 1em;
    border-width:0 0 0 2px;
    border-style: solid;
    border-color: #888888;
    padding: 0 0 0 0.5em;
}
</pre>
<p>Now for the javascript, We need to define the Arrow unicode characters to their html counterparts for easier use in the rest of the script.</p>
<pre class="brush: js">var Arrow = {
    up: &quot;&amp;#x25B2;&quot;,
    down: &quot;&amp;#x25BC;&quot;,
    right: &quot;&amp;#x25B6;&quot;,
    left: &quot;&amp;#x25C0;&quot;
}
</pre>
<p>the enableFAQs function below is the bulk of the logic, I&apos;ll break it down inline...</p>
<pre class="brush: js">function enableFAQs() {</pre>
<p>First, we want to hide all the dictionary definitions (answers).</p>
<pre class="brush: js">    $j(&quot;.faq dd&quot;).css(&quot;display&quot;, &quot;none&quot;);</pre>
<p>Next we create a shortcut matching all the dictionary terms within the FAQs. and for each term, we will replace the plain text with an EM tag with the arrow character, and a STRONG tag with the original text.</p>
<pre class="brush: js">    var dts = $j(&quot;.faq dt&quot;);
    dts.each(function(i) {
        var dt = $j(this);
        var txt = dt.html();
 
        dt.empty()
            .css(&quot;margin-top&quot;, (i &gt; 0) ? &quot;0.5em&quot;: &quot;0&quot;)
            .append($j(&quot;&lt;em /&gt;&quot;).html(Arrow.right))
            .append(&quot; &quot;)
            .append($j(&quot;&lt;strong /&gt;&quot;).html(txt));
    });</pre>
<p>Then we assign some mouseover/out logic.</p>
<pre class="brush: js">    dts.mouseover(function(event) {
        $j(this).addClass(&quot;over&quot;);
    });
    dts.mouseout(function(event) {
        $j(this).removeClass(&quot;over&quot;);
    });</pre>
<p>Next comes the fun part, the click event handler... First we need to get a handle on the dictionary term (DT) and the dictionary definition (DD) so we can set them appropriately.  After this, I create a local variable as to if the DD is currently visible.  After this, I have some commented out methods in case you want to collapse other members before changing the visibility.  After that I set the visibility of the DD tag, as well as changing the marker to the appropriate arrow.</p>
<pre class="brush: js">    dts.click(function(event) {
        event.stopPropagation();
        var dt = $j(this);
        var dd = dt.next(&quot;dd&quot;);
        var visible = !(dd.css(&quot;display&quot;) == &quot;none&quot;)

        //uncomment to auto-close other FAQ elements
        // $j(&quot;.faq dt em&quot;).html(Arrow.right);
        // $j(&quot;.faq dd&quot;).css(&quot;display&quot;, &quot;none&quot;);
 
        if (!visible) {
            dd.css(&quot;display&quot;, &quot;block&quot;);
            dt.children(&quot;em&quot;).html(Arrow.down);
        } else {
            dd.css(&quot;display&quot;, &quot;none&quot;);
            dt.children(&quot;em&quot;).html(Arrow.right);
        }
    });
}
</pre>
<p>After this, we simply use the DOM ready method from jquery to initialize the FAQs.</p>
<pre class="brush: js">$j(function() {
    enableFAQs();
});</pre>
<p>Hopefully this will be helpful to everyone out there.  It took me a little while to get this all working as I want it, and I am not the most familiar with all of jQuery&apos;s methodology, which is what took me a while.</p>
<p><a rel="enclosure" href="./files/faq-test.html" test="true">faq-test.html (2.62 kb)</a></p>