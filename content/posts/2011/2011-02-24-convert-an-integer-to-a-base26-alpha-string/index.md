---
id: 4b033fe5-f2e4-466c-920b-12563d88dc2e
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: Convert-an-integer-to-a-base26-alpha-string
slug: convert-an-integer-to-a-base26-alpha-string
title: Convert an integer to a base26 alpha string
description: ''
date: 2011-02-24T15:18:00.000Z
modified: 2011-02-24T15:18:00.000Z
tags: []
categories:
  - JavaScript
  - Web Development
---

<div class="text"><p>In case you ever need to convert an integer to an alpha (such as the top of a spreadsheet). A-Z, AA-AZ etc. </p>

<pre class="brush: js">function intToAlpha26String(input) {
    input = (+input).toString(26);
    var ret = [];
    while (input.length) {
        var a = input.charCodeAt(input.length-1);
        if (input.length &gt; 1)
            input = (parseInt(input.substr(0, input.length - 1), 26) - 1).toString(26);
        else
            input = &quot;&quot;;

        if (a &gt;= 48/*&apos;0&apos;*/ &amp;&amp; a <= 10="" 57="" *'9'*="" )="" ret.unshift(string.fromcharcode(a="" +="" 49));="" raise="" to="" else="" 10));="" (make="" room="" for="" 0-9)="" }="" return="" ret.join('').touppercase();="" }<="" pre="">

Hope this helps, let me know if you need the reverse, may just work that one out.  Nice that JS supports some fairly broad base classifications that other languages don&apos;t.  This actually translates fairly nicely into actionscript.

<hr>
T-SQL
<pre class="brush: sql">CREATE FUNCTION [dbo].[IntToBase26Alpha]
(
	@input AS int
)
RETURNS varchar(MAX)
AS
BEGIN
	DECLARE @ret AS varchar(MAX)	
	DECLARE @debug as VARCHAR(MAX);
	
	DECLARE @process AS int
	DECLARE @current AS int
	
	SET @ret = &apos;&apos;
	SET @process = CASE WHEN (@input is null or @input &lt; 1) THEN 0 ELSE @input END
	SET @debug = &apos;&apos;
	
	WHILE (@process &gt;= 0)
	BEGIN

		SET @current = @process % 26
		SET @process = ROUND(@process / 26, 0) - 1
		SET @ret = CHAR(@current + 65) + @ret

	END
	
	Return @ret
END
GO</pre>


<p>
</p></=></pre></div>