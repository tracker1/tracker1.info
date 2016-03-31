---
id: 46743b08-8450-4143-805c-5b078f024d9d
author:
  name: Michael J. Ryan
  email: tracker1@gmail.com
oldSlug: 101-reasons-refuted
slug: 101-reasons-refuted
title: 101 reasons why Java is NOT better than .Net in 2010
description: I take a look at the revised (2004) 101 reasons Java is better than .Net and knock down the ones that are no longer the case.
date: 2010-05-27T10:19:00.000Z
modified: 2010-05-27T10:19:00.000Z
tags:
  - .net
  - 'c#'
  - java
  - clr
categories:
  - .Net
  - Architecture
  - 'C#'
  - Virtual Machines
  - Visual Studio
  - Web Development
---

<p>Okay, I&apos;m getting really tired of seeing <a href="http://helpdesk-software.ws/it/29-04-2004.htm" test="true">posts like this one</a>... So I figured I&apos;d take some time to debunk the thing.</p>
[more]
<p>1. The main portions of the CLI and .Net APIs are both Ecma and ISO standards and are also covered by the Community Promise.  They are also implemented in an Open-Source software platform.</p>
<p>2. Mono&apos;s implementation is completely available.  Not to mention that as of VS2008, includes the ability to load into the MS source for viewing.</p>
<p>&#xA0;</p>
<p>3. Java allows hacking via JNI to access native libraries, which means it&apos;s no less &quot;pure&quot; than .Net apps that utilize P/Invoke methods.</p>
<p>4. Is there a recent citation for .Net vs. Java programming in internal enterprise development?  From the job postings I&apos;ve seen it&apos;s about 50/50, and if being in the majority is the biggest reason to stick with something, maybe we shouldn&apos;t be looking at alternatives for Windows either?</p>
<p>5. WCF Services, and WCF Data Services is a far more compelling implementation of Web Services than anything I&apos;ve seen from Java.</p>
<p>6. Getting working in VS vs. Java based tools is a night and day experience... File -&gt; New Project ... run.. &quot;Hello World&quot;.  With Java, you&apos;ll spend half the day trying to get your tools and Tomcat to even work together, let alone trying to get run-time debugging in Tomcat working correctly.  Beyond this there are alternative tool chains for .Net beyond ASP.Net web forms... There&apos;s Castle MonoRail, ASP.Net MVC, and Fubu MVC, let alone ASP.Net MVP.</p>
<p>7. MS SQL Server 2008 supports writing procedures with CLI.  Personally, I find that performance of a non-SQL procedure for interacting with RDBMS resources is often less performant than PL/SQL implementations in general.  Java (or .Net) as a procedural language for RDBMSs isn&apos;t widespread for either, and really isn&apos;t an advantage.  Especially in larger scale environments where sharding and map/reduce techniques are becoming more commonplace (NOSQL).</p>
<p>8. This one is mainly conjecture, and has faulty logic.</p>
<p>9. I&apos;d say that currently there&apos;s as much available Open-Source in .Net and Mono as there is in Java.</p>
<p>10. The link for this one doesn&apos;t work... Perhaps you can show something current, and relevant.</p>
<p>11. I can honestly say I&apos;ve only encountered three instances in the past decade that I&apos;ve needed to use unmanaged resources, and most developers I&apos;ve worked with have never had to use unmanaged resources.  Beyond this, when you do need to do so, for performance reasons or interacting with native libraries, it&apos;s far easier to do with .Net</p>
<p>12. This one is flawed logic as well.  If popularity is a compelling technology argument, again, using the technology provided by the company that has the most common used OS would be a better decision.  Even beyond this logical fallacy, with the DLR there&apos;s a number of languages available for the CLR including dynamic and functional languages.  Not to mention that with the latest iteration, there is much better support for multi-threaded application development in .Net</p>
<p>13. The .Net 4 offline runtime installer for x86, x64 and ia64 is 48MB.  The actual runtimes for any of these environments alone is about half of that. Java x86 (for linux) is 19MB, same for x64, with no ia64 version... seems to be as big and bloated to me.</p>
<p>14. Visual Studio Express editions have been freely available for several years now.  There&apos;s also SharpDevelop and MonoDevelop, along with addons for Eclipse and other IDEs and editing environments.</p>
<p>15. Mono is available on about as many platforms as Java.  Also, you keep touting popularity as an argument, this argument for diversity is a switch from your prior argument standpoints.</p>
<p>16. Funny you say this, considering Java&apos;s implementation support for generics was pretty much ripped off from .Net, and .Net&apos;s original collections were largely based from the Java camp.</p>
<p>17. The JRE hasn&apos;t ever sat still for 5-10 years.  There&apos;s been many painful upgrades by those upgrading from older versions of Java to newer versions.  Also, the open-source libraries you tout tend to go with the current version of Java as well, which means using them keeps you on a similar treadmill.  Beyond this, you always have the Mono implementation and support for older versions of .Net converting to newer versions is less likely to break your codebase than Java version changes.</p>
<p>18. I&apos;m not sure how to respond to this one.  I&apos;ve seen as many .Net resources as Java resources.  Also education should be more about understanding how to develop, and how logic tracks work not a specific language.  Neither .Net or Java should really be a set of courses at a University as both are bad for actually getting students to learn and think.  A good programmer can pick up and understand a new language relatively quickly as needed.  As to outsourcing, that really isn&apos;t a compelling argument as to a technology vs. technology.</p>
<p>19. Theory != RealWorld, There have also been contributions to the .Net ecosystem from universities as well.  Not to mention several SoC projects from the Mono side of the fence.</p>
<p>20. Yes, because the government is the model of efficiency and effectiveness.</p>
<p>21. Link doesn&apos;t work.  Probably more rambling about exposing underlying unmanaged resources.</p>
<p>22. Outdated... There&apos;s a very rich level of support in O/R mapping in the .Net world these days.</p>
<p>23. Outdated... try coderush.</p>
<p>24. Considering many Java coding conventions are similar to .Net ones, I don&apos;t understand the argument.</p>
<p>25. From what I&apos;ve seen the developer salaries are pretty much at parity for .Net vs. Java, I also haven&apos;t ever seen much disparity between the two.</p>
<p>26. What is the argument here?  Also, many people have since switched to applications written in C/C++ because of performance issues.</p>
<p>27. Well, the &quot;R&quot; in RDBMS stands for &quot;Remote&quot; so it might be a database (not remote), and may even support a psuedo SQL dialect.  In any case, there&apos;s a number if integrated databases, and even an embedded version of SQLite, and more recently RavenDB.</p>
<p>28. This is as much of a hindrance as it is a feature.  There are multiple classes of exceptions and catch statements that can be handled in .Net, not to mention the added headaches of the throws clause in the signature in creating derived classes.</p>
<p>29. Well, there is Visio, and a number of other tools for diagram support.  The data diagrams since 2008 are really nice, and better than many of the tools for Java.</p>
<p>30. There are far more application out there than those which rely on an embedded IDE, or even need a subset of features required by an IDE.  That&apos;s what APIs are for.  Beyond this, there are plenty of C/C++ frameworks for extensible editors and IDEs available beyond what is there for Java.</p>
<p>31. Doesn&apos;t hold a candle to LINQ expression trees, or the DLR.</p>
<p>32. There are plenty of options for AOP in .Net as well.</p>
<p>33. Most deployments of Tomcat wind up behind other web servers, when servicing the public.  Not to mention Cassini and XSP (and others) which offer similar features.</p>
<p>34. It&apos;s taken the open-source compilers until fairly recently to get a fairly complete feature set.  There is always Mono, Boo, and other language compilers that target the .Net CLR.</p>
<p>35. There&apos;s distributed cache providers for .Net as well.</p>
<p>36. I can&apos;t think of any messaging systems (MQ) that work in Java that don&apos;t have .Net providers.</p>
<p>37. Compilation time is hardly the benchmark for development time.  If the majority of your development time is spent &quot;compiling&quot; you&apos;re probably doing it wrong.</p>
<p>38. See ISerializable, you can serialize/persist to disk in .Net too.</p>
<p>39. The process in Java has always been pretty much steered by one company behind the final decisions on the standard in Java.  In the .Net space, open-source projects and tools have guided the internal developments (see ASP.Net MVC, and related).</p>
<p>40. ROFLMAO, this is funny, considering .Net has easier access to underlying system libraries, with less context overhead than Java.  WPF and DirectX interfaces are hardware accelerated.</p>
<p>41. What, LGPL/GPL/X11 licensing is too restrictive for you? (See Mono)  How about MS-PL? (See ASP.Net MVC and DLR)</p>
<p>42. Mono offers native compilation options which can run embedded faster, and with less overhead than Java.</p>
<p>43. I&apos;d like to see a comprehensive comparison over limited operational comparisons.  For many of the benchmark comparisons I&apos;ve seen .Net lines up with, or is faster than Java.</p>
<p>44. They have that for .Net now too.</p>
<p>45. It&apos;s around for .Net too, many of the build servers support both .Net and Java now.</p>
<p>46. There are similar options for .Net, but the JIT engine is pretty compelling as is.</p>
<p>47. Even in 2004, I don&apos;t think this was a significant issue, as ODBC was supported in .Net and widely available.  These days there are native drivers for most remote databases, and several embedded options.</p>
<p>48. There are a ton of great profiling tools available for .Net now, not to mention the web profiling tools for VS2010.</p>
<p>49. Don&apos;t get the argument here... as for MSN mention, could it be it was created/started before .Net existed?</p>
<p>50. Not sure this is an advantage.</p>
<p>51. At this point, I don&apos;t think that&apos;s the case any longer.  Not to mention the uncertainty behind the direction of Java now that Oracle&apos;s stepped in over Sun.</p>
<p>52. Hasn&apos;t been the case for several years.</p>
<p>53. No longer the case with F#, Boo, IronPython and other DLR options.</p>
<p>54. I&apos;ve seen people experience plenty of pain updating from older versions of Java, to newer ones.</p>
<p>55. .Net 4 has lots of optimizations in parallel execution.  (the link in the original article isn&apos;t working, so not a good point of reference here).</p>
<p>56. No longer the case (by comparison).</p>
<p>57. No longer the case (by comparison).</p>
<p>58. I have to admit, some of the tools and integrations with the IBM Rational software is pretty compelling, though TFS integration in VS is better it&apos;s not as feature rich end to end.</p>
<p>59. It&apos;s been there in .Net for some time now.  Even then, most applications gain no advantage going 64-bit, unless dealing with insane amounts of data in memory, and in most cases simply winds up using more memory with no advantage.</p>
<p>60. Most of those phones have really poor application support and had been crippled by the cellular providers, at this point there&apos;s better Java support via Dalvik in Android, but I think that MonoTouch and MonoDroid will more than level the playing field (not to mention Windows Phone 7, I&apos;m partial to Android though).</p>
<p>61. Not holding on to a reference and GC.Collect() should do that, not sure where your issues lie, unless you are doing circular dependencies, which you are better off avoiding to begin with.</p>
<p>62. This is still the case, not sure how much of an advantage this diversity is though, as quirks in a specific implementation raises support costs.</p>
<p>63. I don&apos;t think that either Java or .Net are the best options for a true real time environment.  Though, to be honest, most people don&apos;t need *true* real time environments.  Java has no advantages here though.</p>
<p>64. Mono brings a lot of cross platform support, and the P/Invoke system is leaps and bounds better than JNI support.</p>
<p>65. .Net has some very rich XML support, and the MSXML COM objects in windows work quite well, not to mention native C-style libraries that are much easier to interface with.  Plenty of diverse options here, and the performance has improved dramatically in more recent incarnations.</p>
<p>66. I simply don&apos;t feel this is, or even has been the case.  Though not as well supported .Net Remoting was always a very nice integration point, and WF/WCF makes a very nice story for distributed work loads.</p>
<p>67. With more recent enhancements, especially from 2008 forward (with DirectX and WPF), along with being able to do unmanaged interactions, I don&apos;t feel this is the case.  Not to mention the acceleration support mentioned in your prior arguments.</p>
<p>68. Well, it is now (mostly).  There was a lot of inherited integration from earlier versions of VS.  A lot of this has changed with VS2010, and the tools integration is much nicer in VS2010. (MEF FTW!)</p>
<p>69. I think that early on, and even today MS branding struggles.  But I don&apos;t think that Java, Java Beans, J2EE, JRE, J* tools are particularly better than WCF/WPF/WF etc. even back in 2004.</p>
<p>70. I think that the support for DLR, ASP.Net MVC, Moonlight, CodePlex (MS-PL projects) and a ton of the extensibility points in VS2010 would indicate otherwise.</p>
<p>71. There are many options here for .Net as well today.</p>
<p>72. See DLR/LINQ.</p>
<p>73. The link doesn&apos;t work, so not sure about the argument here.</p>
<p>74. I don&apos;t feel that this is any longer the case.  If you follow Los Techies, Rob Conery, and many others.</p>
<p>75. I don&apos;t feel that this is any longer the case as well.</p>
<p>76. As a consumer, there are options in .Net, as a producer, there are lots of native options that perform far better than an unmanaged language can.</p>
<p>77. There are a number of refactoring tools for VS, but in 2004 that was indeed the case.</p>
<p>78. No longer the case, it&apos;s been about even for several years now, with .Net gaining a larger stake in some markets.</p>
<p>79. I&apos;ll be the first to admin, regular expressions in .Net kind of suck.  However, there are a few features in .Net regex that other platforms simply don&apos;t offer.  Named pattern identifiers are pretty nice.  I do think that when LINQ was added to C#, that an integrated RegExp expression should have been added as well.</p>
<p>80. This is no longer the case, even back then I think NAnt was available which was pretty nice.</p>
<p>81. I think the .Net side of the fence is better these days than Java.</p>
<p>82. Probably still true, however there are a number of Open-Source projects in .Net, just the same there are far more than either in interpreted or scripted environments and even C/C++ options than either Java or .Net, so I don&apos;t think Java can hold itself in higher regard here.</p>
<p>83. There are several options for .Net behind MS Visual Studio.  For most use, MonoDevelop is very nice, and VS Express has everything most developers would need.</p>
<p>84. I don&apos;t think I would go that far, as to &quot;standardized&quot; since many implementations with J2EE vary dramatically, they also add an un-needed complexity to many projects that don&apos;t need it.  I&apos;m also not a fan of the way a lot of .Net apps tend to be over-engineered either, to be honest.  There are benefits to &quot;standards&quot; but much of the time, implementations vary so much as to make the standard worthless in all practicality.</p>
<p>85. As of now, it&apos;s better in .Net than Java.  For that matter, you can run Java inside .Net (see JKVM).</p>
<p>86. At this point, it&apos;s a mixed bag.  A lot has changed since 2004, and even back then a lot of things were limited by/to specific providers.</p>
<p>87. I think .Net has advanced more in the past 5 years than Java has, not to mention that in many aspects, it&apos;s passed Java by.</p>
<p>88. I think this is a place where .Net has excelled in the past 3 years in particular.  Support for open standards, and even leading the way in terms of integration has been great.  OData for example is brilliant.  I think they took a while to catch up on MVC and JSON serialization, but they&apos;ve been on the ball since late 2007 (for VS2008).</p>
<p>89. So something that Java does is fine, but MS doing it is bad?  I must admit, I really didn&apos;t care for .Net Passport.  Just the same, a lot of this simply isn&apos;t in place today.  I think that OAuth is pretty nice, and works well enough for many scenarios.  Speaking of which, have you seen StackOverflow.com, pure developer awesome, built in .Net and reached significant mass use on a single server (now more).</p>
<p>90. Ditto (via Mono, even in 2004 though).</p>
<p>91. I think this has more to do with specific software development, over a given platform.</p>
<p>92. This is a flawed argument.</p>
<p>93. This changed a lot after 2005, even more in 2008.  I&apos;d say the Unit testing support is at least as good as in the Java space today.</p>
<p>94. There are plenty of options for identity management, regardless of programming tool chain, I don&apos;t think this is even a comparison that&apos;s appropriate to make.  Not to mention the fact that integrated authentication with AD and other LDAP providers is very rich with IIS + .Net, especially with enhanced options since IIS7.</p>
<p>95. I&apos;d say that Java still leads here, if only slightly.  A lot of the tools since 2008 are pretty compelling on the .Net side, and I think the differences are less striking today.</p>
<p>96. I can&apos;t make a comparison here, as I&apos;m not as familiar with this use case.</p>
<p>97. I think on this issue that Silverlight (even AIR) stomps on Java today.</p>
<p>98. Well, if you use Mono on Linux it&apos;s pretty comparable (licensing cost wise).  With the native compilation options for Mono, I think you could do more on less hardware.</p>
<p>99. Available for .Net as well.</p>
<p>100. Visual Studio 2010.</p>
<p>101. No longer the case.</p>
<p>There you go... pretty much everything mentioned in the original article refuted.  Some of the comments in the original may have been more true 6-7 years ago, but technology advances.</p>