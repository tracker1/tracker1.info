---
id: 6157d45f-16aa-43c3-bc1d-7e2a4a317588
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: Handling-Scripts-in-ASPNet-MVC
slug: handling-scripts-in-aspnet-mvc
title: Handling Scripts in ASP.Net MVC
description: ''
date: 2009-06-29T15:39:00.000Z
modified: 2009-06-29T15:39:00.000Z
tags:
  - 'c#'
  - asp.net
  - mvc
  - javascript
categories:
  - ASP.Net MVC
  - 'C#'
  - JavaScript
---

<p>Okay, so you have a bunch of script references, some added via your master template, others in your views.&#xA0; You&apos;d also like to be able to handle script adds in your partial views.&#xA0; The problem is, you don&apos;t want your views, and partial views to know about the implementation details.&#xA0; What I am going to do, is outline my solution for adding needed scripts into a given view/output without having duplicate script tags, and allowing each master, view, and partial to call for all the scripts it will need. [more]</p>
<pre class="brush: csharp">public static void AddClientScript(this HtmlHelper helper, string scriptPath)
{
  var scripts = helper.ViewContext.HttpContext.Items[&quot;client-script-list&quot;] as Dictionary&lt;string , string&gt; ?? new Dictionary&lt;string , string&gt;();
			
  string scriptFilePath = helper.ViewContext.HttpContext.Server.MapPath(scriptPath);
  if (!File.Exists(scriptFilePath)) return;
			
  var fi = new FileInfo(scriptFilePath);
			
  if (scripts.ContainsKey(fi.FullName)) return;
			
  scripts.Add(fi.FullName, scriptPath);
  helper.ViewContext.HttpContext.Items[&quot;client-script-list&quot;] = scripts;
}</pre>
<p>Each script needed will simply call the HtmlHelper extension method above.&#xA0; As you can see, a generic collection is used, and stored in the HttpRequest.Current.Context.items collection.&#xA0; This allows for any level of view, code behind, controller, or other instances to actually add scripts that would need to be used within the page fairly easily.</p>
<pre class="brush: csharp">public static void ClientScripts(this HtmlHelper helper)
{
  var response = helper.ViewContext.HttpContext.Response;
  var url = new UrlHelper(helper.ViewContext.RequestContext, helper.RouteCollection);
  var scripts = helper.ViewContext.HttpContext.Items[&quot;client-script-list&quot;] as Dictionary&lt;string , string&gt; ?? new Dictionary7lt;string , string&gt;();
			
  response.Write(&quot;\r\n\t&lt;!-- BEGIN - Html.ClientScripts() --&gt;\r\n&quot;);
  foreach (var script in scripts)
  {
    response.Write(string.Format(
      &quot;\t&lt;script src=\&quot;{0}\&quot; type=\&quot;text/javascript\&quot;&gt;lt;/script&gt;\r\n&quot;, 
      url.Content(script.Value)
    ));
  }
  response.Write(&quot;\t&lt;!-- END - Html.ClientScripts() --7gt;\r\n&quot;);
}</pre>
<p>The code above shows the HtmlHelper extension method that needs to be added within the Master/View.&#xA0; My own preference is to make the call directly before the closing body tag (&lt;/body&gt;), this is because I prefer to avoid inline scripts altogether, and include the necessary scripts at the end.&#xA0; Also, I prefer to use event binding, instead of using the on* attributes within the html tags.&#xA0;&#xA0; By injecting scripts this way, you get a fairly clean separation of concerns, can assure that scripts necessary for a given view or partial view are included, and can utilize project level paths without issue.</p>
<pre class="brush: html">--- From each view / partial view ---
&lt;%Html.AddClientScript(&quot;~/Scripts/jquery.js&quot;);%&gt;
&lt;%Html.AddClientScript(&quot;~/Scripts/jquery-ui.js&quot;);%&gt;
&lt;%Html.AddClientScript(&quot;~/Scripts/site.js&quot;);%&gt;
&lt;%Html.AddClientScript(&quot;~/Scripts/views/myview.js&quot;);%&gt;

--- From the main Master/View ---
    &lt;%Html.ClientScripts();%&gt;    
lt;/body&gt;</pre>
<p><strong>-- EDIT: 2009-08-20 --</strong></p>
<p><a href="http://pietschsoft.com/" test="true">Chris Pietschmann</a> made a post about his implementation for a <a href="http://pietschsoft.com/post/2009/08/13/Simple-ScriptManager-for-ASPNET-MVC.aspx" test="true">SimpleScriptManager for ASP.Net MVC</a> with some of the features I had mentioned.  In the comments from this post is a mention to a pretty cool project on Codeplex, <a href="http://aspmvccombine.codeplex.com/" test="true">ASP.NET MVC Client-side Resource Combine</a>.</p>
<p>Either of these are decent uses for within ASP.Net MVC, the actual combine project on codeplex wouldn&apos;t even be limited to use with MVC, though it makes more sense with MVC, since the ScriptManager that comes with ASP.Net Ajax is a decent solution for that paradigm.</p>