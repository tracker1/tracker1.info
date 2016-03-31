---
id: d25fdb6d-e8dd-413b-b678-1292df548b15
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: Build-your-JS-Less-and-CSS-files-via-Nodejs-with-Visual-Studio
slug: build-your-js-less-and-css-files-via-nodejs-with-visual-studio
title: 'Build your JS, Less and CSS files via Node.js with Visual Studio'
description: ''
date: 2012-06-21T12:29:00.000Z
modified: 2012-06-21T12:29:00.000Z
tags: []
categories:
  - CSS
  - JavaScript
  - NodeJS
  - Visual Studio
  - Web Development
---

<p><big>The advice below is not what I would recommend today (late 2013), I would suggest using <a href="https://github.com/wearefractal/gulp" test="true">gulp</a> (gulpfile.js) script for building client-side resources, and would do this as a pre-build event, there&apos;s also grunt, but I believe that gulp is better.  There are plugins for VS (Web Essentials) that can build your .less for you, but they tend to be problematic, inconsistent, and can be outright troublesome.</big></p>
<hr>
<p>&#xA0;</p>
<p>In my previous article, I wanted to use NodeJS to build my .less files as part  	of my build process in Visual Studio 2010.  I&apos;ve since refined this process  	slightly.  I&apos;ve now placed my build scripts into the <code>~/build</code> directory  	at the root of my web project.</p>
<p>I&apos;ve also added a package.json file to the solution, so I can make a call to  	npm install in order to download any required node packages for the build process 	as well as creating a <code>build.node.js</code> file for the purpose of  	compiling my less files, as well as minification and merging of files for use 	elsewhere.</p>
<p>In the future I&apos;d like to expand this to include SASS and CoffeeScript support as  	well as an npm package wrapper.</p>
<p>Here is an example <code>package.json</code></p>
<pre class="brush: js">{
	&quot;name&quot;: &quot;My.Website&quot;
	,&quot;description&quot;: &quot;My Website&quot;
	,&quot;version&quot;: &quot;0.0.1&quot;
	,&quot;author&quot;: &quot;tracker1 (http://tracker1.info/&quot;
	,&quot;dependencies&quot;:{
	}
	,&quot;devDependencies&quot;: {
		&quot;uglify-js&quot;:&quot;1.x.x&quot;
		,&quot;less&quot;:&quot;1.x.x&quot;
		,&quot;cssmin&quot;:&quot;0.3.x&quot;
		,&quot;async&quot;:&quot;0.1.x&quot;
	}
	,&quot;builder&quot;:{
		&quot;tasks&quot;:[
			{
				&quot;type&quot;:&quot;css&quot;
				,&quot;minify&quot;:&quot;both&quot;
				,&quot;output&quot;:&quot;../Content/css/main&quot;
				,&quot;files&quot;:[
					&quot;../Content/bootstrap-less/bootstrap.less&quot;
					,&quot;../Content/bootstrap-less/responsive.less&quot;
					,&quot;../Content/site-less/site.less&quot;
				]
			}
			,{
				&quot;type&quot;:&quot;js&quot;
				,&quot;minify&quot;:&quot;both&quot;
				,&quot;output&quot;:&quot;../Content/js/init&quot;
				,&quot;files&quot;:[
					&quot;../Scripts/js-extensions/010-ConsoleStub.js&quot;
					,&quot;../Scripts/browser-extensions/Browser.js&quot;
					,&quot;../Scripts/browser-extensions/init1.js&quot;
					,&quot;../Scripts/browser-extensions/css_browser_selector.js&quot;
					,&quot;../Scripts/browser-extensions/modernizr-2.5.3.js&quot;
					,&quot;../Scripts/browser-extensions/topscroll.js&quot;
				]
			}
			...
		]
	}
}
</pre>
<p>As you can see, I added a &quot;builder&quot; section with a number of &quot;tasks&quot; right now,  	the only tasks I am supporting are &quot;js&quot; and &quot;css&quot;.  The minify option should be  	either <code>true</code>, <code>false</code>, or <code>&quot;both&quot;</code>.   	The process will create <code>outputfile.(min|full).(css|js)</code> so don&apos;t  	include a file extension on the output path.</p>
<p>My <code>build.cmd</code> file is now as follows, I&apos;m including the TFS commands to checkout  	my js and css output paths, if you&apos;re using git/svn you can comment those lines  	out.</p>
<pre class="brush: shell">:: Step up from ~/bin to ~/build directory
cd ..\build

:: Checkout the files to be built
&quot;%VS100COMNTOOLS%\..\IDE\tf&quot; checkout /lock:none &quot;..\Content\css\*.*&quot;
&quot;%VS100COMNTOOLS%\..\IDE\tf&quot; checkout /lock:none &quot;..\Content\js\*.*&quot;

echo.
echo installing package dependancies
call npm install

echo.
echo building min/merge js and css
node build.node.js
echo.</pre>
<p>With all of that said, here is my <code>build.node.js</code> file.</p>
<pre class="brush: js">var fs = require(&quot;fs&quot;);
var util = require(&quot;util&quot;);
var async = require(&quot;async&quot;);

var less = require(&quot;less&quot;);
var cssmin = require(&quot;cssmin&quot;).cssmin;

var jsp = require(&quot;uglify-js&quot;).parser;
var pro = require(&quot;uglify-js&quot;).uglify;

var cfg;

main();

function main() {
	var pkg = JSON.parse(fs.readFileSync(&quot;package.json&quot;),&quot;utf8&quot;);
	cfg = pkg.builder;
	cfg.startDir = process.cwd();
	runTasks();
}

function runTasks() {
	console.log(&quot;Building CSS &amp; JS files.&quot;);

	//store an array of functions for running each task
	var tasks = [];

	//console.log(JSON.stringify(cfg));

	//input each task definition into a runner.
	cfg.tasks.forEach(function(t){
		tasks.push(function(cb){
			if (t.type == &quot;css&quot;) return runCssTask(t,cb);
			if (t.type == &quot;js&quot;) return runJsTask(t,cb);
			cb(null,-1); //unrecognized format
		});
	});
	async.series(
		tasks
		,function(err,data) {
			console.log(&quot;Finished building CSS &amp; JS files.&quot;);
		}
	);
}

function runCssTask(task, cb) {
	//data should be a collection of tree, use tree.toCSS() and tree.toCSS({compress:true}) respectively
	var min = task.minify;
	var full = !task.minify || task.minify === &quot;both&quot;;
	
	console.log(&quot;Building &quot; + task.output + &quot; css&quot;);

	var fx = [];
	task.files.forEach(function(f){
		console.log(&quot;Loading &quot; + f);

		fx.push(function(cb){
			var fp = fs.realpathSync(f).replace(/[\\\/]+/g,&apos;/&apos;);
			var p = f.replace(/(\/[^\/]+)$/g,&apos;/&apos;);

			var src = fs.readFileSync(fp,&apos;utf8&apos;);
			var parser = new(less.Parser)({
				paths:[p]
				,filename:fp
			});
			parser.parse(src,function(err,tree){
				if (err) return cb(err,null);
				return cb(null, {&quot;file&quot;:f, &quot;css&quot;:tree.toCSS()});
			});
		});
	});
	async.series(
		fx
		,function(err,results) {
			if (err) throw err; //don&apos;t continue on error

			var m = [];
			var f = [];

			if (results &amp;&amp; results.length) {
				results.forEach(function(item){
					if (min) {
						m.push(&quot;/*&quot; + item.file + &quot;*/\r\n&quot;);
						m.push(cssmin(item.css));
						m.push(&quot;\r\n\r\n&quot;);
					}
					if (full) {
						f.push(&quot;/*&quot; + item.file + &quot;*/\r\n&quot;);
						f.push(item.css);
						f.push(&quot;\r\n\r\n&quot;);
					}
				});
			}

			//write file(s)
			if (min) fs.writeFileSync(task.output + &quot;.min.css&quot;, m.join(&quot;&quot;), &apos;utf8&apos;);
			if (full) fs.writeFileSync(task.output + &quot;.full.css&quot;, f.join(&quot;&quot;), &apos;utf8&apos;);

			console.log(&quot;css handled for &apos;&quot; + task.output + &quot;&apos; &quot; + results.length);

			cb(null,1);
		}
	)
}

function runJsTask(task, cb) {
	var min = task.minify;
	var full = !task.minify || task.minify === &quot;both&quot;;

	console.log(&quot;Building &quot; + task.output + &quot; css&quot;);

	var fx = [];
	task.files.forEach(function(f){
		fx.push(function(cb){
			console.log(&quot;Loading &quot; + f);
			var ret = {&quot;file&quot;:f};
			var fp = fs.realpathSync(f).replace(/[\\\/]+/g,&apos;/&apos;);
			var p = f.replace(/(\/[^\/]+)$/g,&apos;/&apos;);
			
			ret.full = fs.readFileSync(f,&apos;utf8&apos;);
			if (min) {
				var ast = jsp.parse(ret.full); //parse code for initial ast
				ast = pro.ast_mangle(ast); //get new ast with mangled names
				ast = pro.ast_squeeze(ast); //get an ast with compression optimizations
				ret.min = pro.gen_code(ast); //get compressed output
			}
			cb(null, ret);
		});
	});
	
	async.series(
		fx
		,function(err,results) {
						if (err) throw err; //don&apos;t continue on error

			//data should be a collection of tree, use tree.toCSS() and tree.toCSS({compress:true}) respectively

			var m = [];
			var f = [];

			if (results &amp;&amp; results.length) {
				results.forEach(function(item){
					if (min) {
						m.push(&quot;;/*&quot; + item.file + &quot;*/\r\n&quot;);
						m.push(item.min);
						m.push(&quot;\r\n\r\n&quot;);
					}
					if (full) {
						f.push(&quot;;/*&quot; + item.file + &quot;*/\r\n&quot;);
						f.push(item.full);
						f.push(&quot;\r\n\r\n&quot;);
					}
				});
			}
			
			//write file(s)
			if (min) fs.writeFileSync(task.output + &quot;.min.js&quot;, m.join(&quot;&quot;), &apos;utf8&apos;);
			if (full) fs.writeFileSync(task.output + &quot;.full.js&quot;, f.join(&quot;&quot;), &apos;utf8&apos;);

			console.log(&quot;js handled for &apos;&quot; + task.output + &quot;&apos; &quot; + results.length);
			cb(null,2);
		}
	);
}</pre>