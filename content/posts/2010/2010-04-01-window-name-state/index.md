---
id: a66c665a-9197-4d6b-9880-0c057a0d4b56
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: window-name-state
slug: window-name-state
title: Single-window state machine.
description: Simple script to maintain a form state within a window as a given page is loaded/unloaded within a multipage app.
date: 2010-04-01T15:19:00.000Z
modified: 2010-04-01T15:19:00.000Z
tags:
  - jquery
  - javascript
  - state
categories:
  - JavaScript
  - jQuery
  - Web Development
---

<p>I&apos;m currently working on a project where one of the applications has a subform, or child form that has interactions that are separate from the main page within the application.  The main page is essentially a filter form, with a results grid.  Each item in the grid displays a child form, when the child form is completed, the original screen is displayed again.</p><p>

</p><p>Sounds simple enough right?  Well, the business desire is to have the filter option form keep its&apos; settings when returning to the page.  My initial solution was to use a <a href="http://jqueryui.com/demos/dialog/" test="true">jQueryUI dialog</a> based option (<a href="http://plugins.jquery.com/project/jquery-framedialog" test="true">via an IFrame</a>).  Which works great, except in certain conditions IE7 flickers when the mouse moves in/out of the IFrame itself if there are scroll bars present. <em>ugh.</em></p>

<p>I didn&apos;t want to use cookies, or server-side session state as these will affect all windows using the main form.  If a user launches the app in a new window, with different filters set, I didn&apos;t want these windows to effect each other.  Then it occurred to me, I could use <a href="http://en.wikipedia.org/wiki/HTTP_cookie#window.name" test="true">window.name</a> to store the state of the form when entering, and leaving the page.  I tend to store an &quot;__original_value__&quot; for each form element when a page loads, that way its&apos; easy enough to return to default values later on via code.&#xA0; [more]</p>

<p>I&apos;m including the jQuery code to make this work.  It&apos;s worth noting that you may have other interactions that are more complex, and you will likely want to run this script directly after jQuery is loaded, so it&apos;s the first thing run via the load event.  Also, you&apos;ll want to snag json2.js for the json parsing.</p>

<pre class="brush: javascript">//StateMachine.js
// TODO: create an event/message pump for adding state save/load plugins

//execute closure on load via jQuery
;$(function(){
  //keys for state variables
  var appName = &quot;MY_APPLICATION&quot;;
  var pageName = &quot;MY_PAGE&quot;;

  //state variables
  var state, app, page;

  //gets the save value for a given element
  function valToSave(el) {
    if (el.type == &apos;checkbox&apos;)
      return !!el.checked;
    if (el.type == &apos;radio&apos;)
      return ($(el.form).find(&quot;input[@name=&apos;&quot; + el.name + &quot;&apos;]:checked&quot;).val();
    return $(el).val();
  }

  //sets the value for a given element based on the form, and element state
  function setVal(form, elstate) {
    //get matching input for form.
    var el = $(form).find(elstate.id ? &apos;#&apos;+elstate.id : &quot;input[@name=&apos;&quot; + elstate.name + &quot;&apos;]&quot;);
    
    //if it&apos;s a checkbox, set the checked attribute
    if (elstate.type == &apos;checkbox&apos;)
      return (!!elstate.val) ? el.attr(&apos;checked&apos;, true) : el.removeAttr(&apos;checked&apos;, &apos;checked&apos;);
    
    //it&apos;s a radio
    if (elstate.type == &apos;radio&apos;) {
		//clear checked before setting the value
		el.removeAttr(&apos;checked&apos;); 
		
		//set the one with the correct value
		return $(form).find(&quot;input[@name=&apos;&quot; + elstate.name + &quot;&apos;][@value=&apos;&quot; + elstate.val + &quot;&apos;]&quot;).attr(&apos;checked&apos;, &apos;checked&apos;);
	}
    
    //set the value for the field
    return $(el).val(elstate.val);
  }

  //gets a form based on the saved form state.
  function getForm(fstate) {
    var f;
    
    //if there&apos;s an id, try getting the matching form
    if (fstate.id) 
      f = $(&apos;#&apos; + fstate.id);
    if (f.length)
      return f.eq(0);
      
    //if there&apos;s a name, try getting the matching form
    if (f.name)
      f = $(&apos;form[name=&apos; + fstate.name + &apos;]&apos;);
    if (f.length)
      return f.eq(0);
      
    //if there&apos;s a form matching the index, use that
    if (document.forms[fstate.index])
      return document.forms[fstate.index];
      
    //no match
    return null;
  }
  
  //gets the state to save for a given form.
  function getFormsState() {
    var forms = {};
    $.each(document.forms, function(fidx, form){
      var f = { &apos;index&apos;: fidx, e:[] };
      var radioGroups = {};
      if (form.id) f.id = form.id;
      if (form.name) f.name = form.name;
      $.each(form.elements, function(eidx, el) {
        var e = { &apos;index&apos;:eidx, &apos;type&apos;:el.type, &apos;name&apos;:el.name || el.id, &apos;val&apos;:valToSave(el) };

        //set the id if it&apos;s available
        if (el.id) e.id = el.id;
        
        //if it&apos;s a radio group, do specific checks to only populate the results once.
        if (el.type == &apos;radio&apos;) {
          //already handled
          if (radioGroups[el.name]) return;

          //remove id from result set, so it isn&apos;t used for matching
          delete e.id;
          
          //set the value so it&apos;s already handled, for further matching radio inputs
          radioGroups[el.name] = true;
        }

        //add the element to the stack
        f.e.push(e);
      });
      forms.push(f); //add form to forms collection
    });
    return forms;
  }

  //sets the state of the forms based on the state input
  function setFormState(forms) {
    $.each(forms, function(fidx, fstate){
      var form = getForm(fstate);
      if (form) {
        $.each(fstate.e, function(eidx, elstate) {
          setVal(form, elstate);
        });
      }
    });
  }

  //method to save the state
  function saveState(){
    //get the state of the forms to save
    page.forms = getFormsState();
    
    //NOTE: Do any other state for the page saving here...

    //rollup the new state.
    app[pageName] = page;
    state[appName] = app;
    
    //save the state out.
    window.name = JSON.stringify(state);
  }

  //method to load state
  function loadState(){
    try {
      state = JSON.parse(window.name);
      app = state[appName] || {};
      page = app[pageName] || {};
      if (page.forms) {
        setFormState(page.forms);
      }
      
      //NOTE: Do any other state for the page loading here...
      
    } catch(err) {
      state = {}; //error loading state, reset it
      return;
    }
  }
  
  function startStateMachine() {
    //save original values for all form elements
    $.each(document.forms, function(fidx, form){
      $.each(form.elements, function(eidx, el) {
        $(el).data(&apos;__original_value__&apos;, valToSave(el));
      });
    });
    
    //bind the unload to save the state
    $(window).bind(&apos;unload&apos;, function(){
      saveState();
    });

    //load the saved state, if any
    loadState();
  }

  //start the state machine events.
  startStateMachine();
  
});</pre>

<p>There you have it, a fairly complete pattern for using the window.name as a state machine for multiple pages within an application.  I&apos;ve only impletented the part with forms here, but it should be a nice start.</p>
