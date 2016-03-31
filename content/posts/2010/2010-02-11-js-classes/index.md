---
id: 9298c49e-e2e2-42ad-8811-04e3282043e6
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: js-classes
slug: js-classes
title: Classy JavaScript - Best Practices
description: 'Best practices for defining classes, as well as utilizing namespacing in your JavaScript.'
date: 2010-02-11T13:26:00.000Z
modified: 2010-02-11T13:26:00.000Z
tags:
  - javascript
  - class
  - object
  - closures
categories:
  - JavaScript
---

<p>Okay, so you really want to be able to have some of your JavaScript methods to have access to a variable that is private, but maintains state between calls.  The first piece of knowledge, is that you can have the contents of a function execute itself at runtime.</p>

<pre class="brush: js">(function(){ /*Your actions here*/ })();</pre>

<p>This is a very common method of defining complex classes and libraries, that can have their own variables or methods that aren&apos;t otherwise available to the object model outside this closure.  When you utilize &quot;this&quot; within the function&apos;s closure it will be default to the global object, which in the Browser DOM is &quot;window&quot;.</p>

<pre class="brush: js">(function(){
    this.test = &quot;Test Value&quot;;
})();
alert(test); //alerts &quot;Test Value&quot;</pre>

<p>Usually when creating libraries in JavaScript it&apos;s a good idea to create namespaces for your library. [more]Below I am going to use a classic example for defining a namespace of My.Namespace.  There are helper methods out there that will walk a chain from a literal string of &quot;My.Namespace&quot;, but I&apos;m showing it in raw script.</p>

<pre class="brush: js">if (typeof My == &apos;undefined&apos;)
  My = {};
if (typeof My.Namespace == &apos;undefined&apos;)
  My.Namespace = {};</pre>

<p>By combining the above method, and using the Function.prototype.call method on your anonymous function, you can call the function with &quot;this&quot; set to your namespace.  I&apos;ll be implementing a class called &quot;SomeClass&quot; within &quot;My.Namespace&quot; below.  I&apos;ll also be showing how to create private static members and methods, allong with public static methods, and instance methods.</p>

<pre class="brush: js">//begin private closure
(function(){

    //this is a private static member that is only available in this closure
    var instances = 0;

    //this is a private static method that can be used internally
    function _incrementInstances() {
        instances++;
    }

    //Define SomeClass (js uses functions as class constructors, utilized with the &quot;new&quot; keyword)
    this.SomeClass = function(options) {
        //if the function is called directly, return an instance of SomeClass
        if (!(this instanceOf SomeClass))
            return new SomeClass(options);

        //call static method
        _doSomething();

        //handle the options initialization here
    }

    //create a public static method for SomeClass
    this.SomeClass.getInstanceCount = function() {
        return instances; //returns the private static member value
    }

    //create an instance method for SomeClass
    this.SomeClass.prototype.doSomething = function() {
      /*Do Something Here*/
    }

//end private closure then run the closure, localized to My.Namespace
}).call(My.Namespace);</pre>

<p>The above is an example of best practices for defining a Class within a given namespace.  From here, you can instantiate an instance of &quot;My.NameSpace.SomeClass&quot; and utilize the public methods exposed.</p>

<pre class="brush: js">//instantiate a SomeClass instance
var sc = new My.Namespace.SomeClass({/* options go here */});

//call SomeClass as a function, which will return an instance
//  defined above via &quot;(!(this instanceOf SomeClass))&quot;
var sc = My.Namespace.SomeClass({/* options */});

//view the instance count, which uses a public static method
//  to return a private static member.
alert(My.Namespace.SomeClass.getInstanceCoun());</pre>

<p>From here, you may be thinking to yourself, that&apos;s a lot of typing.  This is where aliasing can come in handy, in this example inside a closure of course.</p>

<pre class="brush: js">(function(){
    //alias My.NameSpace
    var m = My.NameSpace

    //bad form assigning onload internally,
    //  but that&apos;ll be for another post on event binding
    //  Also, we could use &quot;this.onload&quot; but using window directly is more obvious here.
    window.onload = function() {
        //attach an instance of My.NameSpace.SomeClass instance to window.
        window.sc = new m.SomeClass({}); //no long namespace name here :)
    }

})();</pre>

<p>Hopefully this post will be helpful in utilizing some privacy with your classes, and using namespaces to prevent naming collisions with other classes, and libraries.</p>