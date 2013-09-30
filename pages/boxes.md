---
layout: default
title:  Boxes
permalink: /boxes/
---

# Boxes

## Dashboard Boxes
This box is suitable for grouping dashboard content. It has an optional context help function and a context menu in the titlebar you can use by supplying the markup in the example.

<div class="example">
  <section class="box" contextmenu="feeds-news-menu" id="feeds-news">
    <h1 class="box-title">My Intranet News</h1>
    <div class="box-instructions">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      quis nostrud exercitation ullamco laboris nisi ut aliquip <a href="#">ex ea commodo </a>.</p>
      <p>Reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur.</p>
    </div>
    <div class="box-content body-copy">
      <p>Box with help and context menu.</p>
      <p>Suitable for dashboard usage.</p>
    </div>
    <a href="#" class="toggle-instructions" title="Show instructions">?</a>
    <div class="dropdown box-menu pull-right">
      <a class="dropdown-toggle" data-toggle="dropdown" href="#" id="feeds-news-menu" role="button" title="Adapt this box">
        <span class="icon-caret-down icon-large"></span>
      </a>
      <menu aria-labelledby="feeds-news-menu" class="dropdown-menu" role="menu">
        <li><a href="#">Manage these feeds...</a></li>
        <li><a href="#" data-confirm="Reset all feeds?" data-method="put">Reset feeds</a></li>
        <li><a href="#">Configure...</a></li>
      </menu>
    </div>
  </section>
</div>

{% highlight html %}
<section class="box" contextmenu="feeds-news-menu" id="feeds-news">
  <h1 class="box-title">My Intranet News</h1>
  <div class="box-instructions">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing ...</p>
  </div>
  <div class="box-content body-copy">
    <p>Box with help and context menu.</p>
    <p>Suitable for dashboard usage.</p>
  </div>
  <a href="#" class="toggle-instructions" title="Show instructions">?</a>
  <div class="dropdown box-menu pull-right">
    <a class="dropdown-toggle" data-toggle="dropdown" href="#" id="feeds-news-menu" role="button" title="Adapt this box">
      <span class="icon-caret-down icon-large"></span>
    </a>
    <menu aria-labelledby="feeds-news-menu" class="dropdown-menu" role="menu">
      <li><a href="#">Manage these feeds...</a></li>
      <li><a href="#" data-confirm="Reset all feeds?" data-method="put">Reset feeds</a></li>
      <li><a href="#">Configure...</a></li>
    </menu>
  </div>
</section>
{% endhighlight %}

## Article Boxes
A lighter box suitable for article content is also available. It is e.g. used for background info in news articles.

<div class="example">
  <section class="box light">
    <h1 class="box-title">Background</h1>
    <div class="box-content body-copy">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </section>
</div>

{% highlight html %}
<section class="box light">
  <h1 class="box-title">Background</h1>
  <div class="box-content body-copy">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing ...</p>
  </div>
</section>
{% endhighlight %}
