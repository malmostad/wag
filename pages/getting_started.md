---
layout: default
title:  Getting Started
permalink: /getting_started/
---

# Getting Started

The term "global assets" refers to the JavaScript, stylesheet, web fonts and a few images that are share by all intranet applications at the City of Malmö. The global asset files are served from a public available asset server: assets.malmo.se. Each application will likely have its own additional assets for application specific styling and functionality.

## Include the Global Assets In Your Application
To use the global assets, you need to include a stylesheet and a JavaScript file in your application as well as a favicon reference and a few conditional includes for older browsers. Be sure to use the HTML5 doctype and the `X-UA-Compatible` meta tag to get it all working.

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

As you can see in the example, your own stylesheet should be added after the global stylesheet. Your own stylesheet contains everything your application needs that is not contained in the global assets. Application specific files are not deployed to the asset server, those are served directly from your applications web server.

The `viewport` meta tag must be included to get a responsive application. You *must not* set the `maximum-scale` value in the `viewport` meta tag because it is not our business to decide if the user wants to zoom in or not on a narrow device.

JavaScript files should be included just before the end `body` tag:

{% highlight html %}
    ...
    <script src='//assets.malmo.se/internal/3.0/malmo.js'></script>
    <script src='/your_own_javascripts.js'></script>
  </body>
</html>
{% endhighlight %}

Your own JavaScript should be placed after the global one.

### Legacy Systems
If you have an approved exception from kominteamet@malmo.se to not comply with the full WAG, you must at a minimum enable the intranet masthead in your application. To do so, change `malmo.css` to `masthead_standalone.css` and `malmo.js` to `masthead_standalone.js` in the code above.

If your application already includes jQuery 1.10.x, change the JavaScript to `masthead_standalone_without_jquery.js`.

If your application has no responsive design, change the stylesheet to `masthead_standalone_non_rwd.css`.

## Optimize Your Own Assets
Your own stylesheets and JavaScript code must be concatenated into single files and then minified. If your application has files for older versions of Internet Explorer, include them in conditional comments.

Serve your assets with gzip/deflate compression from the web server with http caching headers optimized.

If you're using AMD loading of assets, all individual files must be minified and you need to optimize the balance between the number of HTTP request and the size of the files.

## The Masthead
The masthead, seen at the top of this page, is automatically included on every intranet page when you use the global assets. The `margin-top` on the `body` of your application must leave room for the masthead that has a fixed position on wider viewports. TODO: on all sizes?

The masthead is responsive and you must set the `viewport` meta tag in your application for it to work (see above).

If one of the menu items in the masthead should be indicated as active in your application, add the corresponding class to your body tag. Available classes are:

* Mina sida: `malmo-masthead-dashboard`
* Min förvaltning: `malmo-masthead-my-department`
* Mitt arbetsfält: `malmo-masthead-my-workingfield`
* Vår kommun: `malmo-masthead-our-organization`
* Min anställning: `malmo-masthead-hrutan`
* Mer: `malmo-masthead-more`

## Application Title
Put the human name of your application at top of the page like we've done here by adding an app-title:

{% highlight html %}
<div class='app-title'><a href='/'>Web Application Guidelines 3.0</a></div>
{% endhighlight %}

## Components and Widgets in the Global Assets
Since the global assets are used by many applications and since they have a long life-cycle, we are cautious when it comes to include UI components and frameworks in the bundle. If you have need for components not included, add them to your own code and be sure to maintain and update them.

jQuery version 1.10.x is included in the global assets. Other third party JavaScript components can be seen in the [vendor directory](https://github.com/malmostad/intranet-assets/tree/master/vendor/assets/). The jQuery UI file includes the autocomplete component documented in the Forms section but not any of the other jQuery UI components and not a jQuery UI theme.

The global assets includes a full version of the icon web font [Font Awesome](http://fontawesome.io/). Check the [vendor directory](https://github.com/malmostad/intranet-assets/tree/master/vendor/assets/stylesheets) in the assets source code to see which version is included.

## CSS Units
As noted in several sections, you should use relative units in your CSS code. Use `em` and `%`. The exceptions are thin borders where you can use `1px` and font size in forms (see the section on Typography).

## Your Applications Domain
All web applications must have a subdomain under *.malmo.se. This is essential for the masthead to work.

## Google Analytics
Google Analytics tracking is included in the global assets and statistics are collected to the City of Malmö's account. This is important so we can analyze traffic and user behavior across all off our services. You *must not* initiate other Google Analytics accounts in your application.

If you need to do custom event tracking in your application, use your applications technical name as a prefix for the event names so we don't get Google Analytics events with colliding names.

To prevent data from your development and test environments to be collected in the production account, add a `development` or `test` class to the `body` tag. The data will then be collected to our test account.

{% highlight html %}
<body class='development'>
{% endhighlight %}

{% highlight html %}
<body class='test'>
{% endhighlight %}

## Global Assets Internals
The source code for the [global assets are available on Github](https://github.com/malmostad/intranet-assets). The deployed version on the asset server is in the 3.0-stable branch and is the same as the most recent production tag. Pre-releases are deployed to http://assets.malmo.se/internal/3.0-staging/.
