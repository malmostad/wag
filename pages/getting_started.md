---
layout: default
title:  Getting Started
permalink: /getting_started/
---

# Getting Started

The term "global assets" here refers to the common JavaScript, stylesheet, some web fonts and a few images that are share by all intranet applications. The global asset files are served from a public available asset server: assets.malmo.se. Each application will likely have its own additional assets with application specific styling and functionallity.

## Include the Global Assets In Your Markup
To enable the global assets, you need to include a stylesheet and a JavaScript file in your application as well as a favicon referencea and a few conditional includes for older browsers. Be sure to use the html5 doctype to get it all working.

Your `head` block should look like this:

{% highlight html %}
<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'/>
    <meta content='width=device-width, initial-scale=1.0' name='viewport'/>
    <meta content='IE=edge' http-equiv='X-UA-Compatible'/>
    <title>Your Applications Title</title>
    <!--[if lte IE 8]><script src='//assets.malmo.se/internal/3.0/html5shiv-printshiv.js' type='text/javascript'></script><![endif]-->
    <link href='//assets.malmo.se/internal/3.0/malmo.css' media='all' rel='stylesheet' type='text/css'/>
    <!--[if lte IE 7]><link href='//assets.malmo.se/internal/3.0/legacy/ie7.css' media='all' rel='stylesheet' type='text/css'/><![endif]-->
    <link rel='stylesheet' href='/your_own_stylesheet.css'>
    <link rel='icon' type='image/x-icon' href='//assets.malmo.se/internal/3.0/favicon.ico'/>
  </head>
  <body>
    ...
{% endhighlight %}

As you can see in the example, your own stylesheet should be added after the global stylesheet. Your own stylesheet contains everything your application need that is not contained in the global assets. Application specific files are not deployed to the asset server, those are served directly from your applications web server.

The `viewport` meta tag must be included to get a responsive application. You *must not* set the `maximum-scale` value in the `viewport` meta tag. It is not our business to decide if the user want's to zoom in or not on a narrow device.

JavaScript files should be included just before the end `body` tag.

{% highlight html %}
    ...
    <script src='//assets.malmo.se/internal/3.0/malmo.js'></script>
    <script src='/your_own_javascripts.js'></script>
  </body>
</html>
{% endhighlight %}

Your own JavaScript is placed after the global one.

## Optimize Your Own Assets
Your own stylesheets and JavaScript code must be contcatenated into two files and then minified. If your application has files for older versions of Internet Explorer, include them in conditional comments.

Your own styleheets and JavaScripts must be served with gzip/deflate compression from the web server with http cache headers optimized for your application.

If you're using AMD loading of assets in your application, all individual files must be minified and you need to optimize the balance beween the number of http request and the size of the files.

## The Masthead
The masthead, seen at the top of this page, is automaticaly included on every intranet page when you use the global assets. The `margin-top` on the `body` of your application must leave room for the masthead that has a fixed position on wider viewports.

The masthead is responsive and you must set the `viewport` meta tag in your application (see above).

If one of the menu items in the masthead should be indicated as active in your application, you need to add the corresponding class to your body tag. Available classes are:

* Mina sida: `malmo-masthead-dashboard`
* Min förvaltning: `malmo-masthead-my-department`
* Mitt arbetsfält: `malmo-masthead-my-workingfield`
* Vår kommun: `malmo-masthead-our-organization`
* Min anställning: `malmo-masthead-hrutan`
* Mer: `malmo-masthead-more`


## Components and Widgets in the Global Assets
Since the global assets are used in many applications and since they have a long lifecycle, we are conservative when it comes to include UI components and frameworks in the bundle. If you have need for components not included, add them to your own code.

jQuery version 1.10.x is included in the global assets. Other third party JavaScript components can be seen in the [vendor directory](https://github.com/malmostad/intranet-assets/tree/master/vendor/assets/). The jQuery UI file includes the autocomplete component documented in the Forms section.

## CSS Units
As noted in several sections, you should use relative units in your CSS code. Use `em` and `%`. The exceptions are thin borders where you can use `1px` and forms (see the section on forms).

## I don't find...
Markup and style for 



## Your Applications Domain
All web applications must have a subdomain under *.malmo.se. This is essential for the masthead to work.

## Google Analytics
Google Analytics tracking is included in the global assets and statistics are collected to the City of Malmö's account. This is important so we can analyse traffic and user behaviour across all off our services. You *must not* initiate any other Google Analytics account in your application.

If you need to do custom event tracking in your application, use your applications technical name as a prefix for the event names so we don't get events with colliding names.

To prevent data from your development and test environments to be collected in the production account, add a `development` or `test` class to the `body` tag. The data will then be collected to our test account.

{% highlight html %}
<body class='development'>
{% endhighlight %}

{% highlight html %}
<body class='test'>
{% endhighlight %}

## Global Assets Internals
The source code for the [global assets are available on Github](https://github.com/malmostad/intranet-assets). The deployed version on the asset server is in the 3.0-stable branch and is the same as the most recent production tag. Pre-releases are deployed to http://assets.malmo.se/internal/3.0-staging/.
