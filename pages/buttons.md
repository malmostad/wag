---
layout: default
title:  Buttons
permalink: /buttons/
---

# Styling Buttons
To get the correct styling for buttons, you need to use the class names specified below. Follow the [Bootstrap 2.3](http://getbootstrap.com/) class name standard. Please note that:

* No default styling is applied to buttons.
* The styling works for both `input` elements of the `submit` type as well as `button` and `a` elements.

<div class="example">
  <a class="btn" href="#">Link</a>
  <button class="btn" type="submit">Button</button>
  <input class="btn" type="button" value="Input"/>
  <input class="btn" type="submit" value="Submit"/>
</div>
{% highlight html %}
<a class="btn" href="#">Link</a>
<button class="btn" type="submit">Button</button>
<input class="btn" type="button" value="Input"/>
<input class="btn" type="submit" value="Submit"/>
{% endhighlight %}


## Action Semantics
Use the `btn-primary` class for actions where the user is creating or saving something. This includes a *Login* button. The `btn-danger` class is used for deleting actions where a warning is appropriate. For all other buttons, like *Search*, *Cancel* or *Update filter*, use the `btn` class only.

<div class="example">
  <button class="btn">Search</button>
  <button class="btn btn-primary">Save</button>
  <button class="btn btn-danger">Delete</button>
</div>
{% highlight html %}
<button class="btn">Search</button>
<button class="btn btn-primary">Save</button>
<button class="btn btn-danger">Delete</button>
{% endhighlight %}

## Sizes
<div class="example">
  <button class="btn btn-mini">Mini</button>
  <button class="btn btn-small">Small</button>
  <button class="btn">Regular</button>
  <button class="btn btn-large">Large</button>
</div>

{% highlight html %}
<button class="btn btn-mini">Mini</button>
<button class="btn btn-small">Small</button>
<button class="btn">Regular</button>
<button class="btn btn-large">Large</button>
{% endhighlight %}

## Disabled Buttons

<div class="example">
  <button class="btn disabled" disabled="disabled">Search</button>
  <button class="btn btn-primary disabled" disabled="disabled">Save</button>
  <button class="btn btn-danger disabled" disabled="disabled">Delete</button>
</div>
{% highlight html %}
<button class="btn disabled" disabled="disabled">Search</button>
<button class="btn btn-primary disabled" disabled="disabled">Save</button>
<button class="btn btn-danger disabled" disabled="disabled">Delete</button>
{% endhighlight %}

## Button Groups
A button group is used for connected buttons, e.g. in a toolbar.

<div class="example">
  <div class="btn-group">
    <button class="btn">Left</button>
    <button class="btn">Middle</button>
    <button class="btn">Right</button>
  </div>
</div>
{% highlight html %}
<div class="btn-group">
  <button class="btn">Left</button>
  <button class="btn">Middle</button>
  <button class="btn">Right</button>
</div>
{% endhighlight %}


## Button Dropdowns

Dropdown multi action buttons.

<div class="example">
  <div class="btn-toolbar">
    <div class="btn-group">
      <button class="btn dropdown-toggle" data-toggle="dropdown">Select <span class="icon-caret-down"></span></button>
      <ul class="dropdown-menu">
        <li><a href="#">All posts</a></li>
        <li><a href="#">New posts</a></li>
        <li><a href="#">Posts with comments</a></li>
      </ul>
    </div>
    <div class="btn-group">
      <button class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Add <span class="icon-caret-down"></span></button>
      <ul class="dropdown-menu">
        <li><a href="#">Comment</a></li>
        <li><a href="#">Post</a></li>
        <li class="divider"></li>
        <li><a href="#">Group</a></li>
      </ul>
    </div>
    <div class="btn-group">
      <button class="btn btn-danger dropdown-toggle" data-toggle="dropdown">Delete <span class="icon-caret-down"></span></button>
      <ul class="dropdown-menu">
        <li><a href="#">Comment</a></li>
        <li><a href="#">All comments</a></li>
      </ul>
    </div>
  </div>
</div>

{% highlight html %}
<div class="example">
  <div class="btn-toolbar">
    <div class="btn-group">
      <button class="btn dropdown-toggle" data-toggle="dropdown">Select <span class="icon-caret-down"></span></button>
      <ul class="dropdown-menu">
        <li><a href="#">All posts</a></li>
        <li><a href="#">New posts</a></li>
        <li><a href="#">Posts with comments</a></li>
      </ul>
    </div>
    <div class="btn-group">
      <button class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Add <span class="icon-caret-down"></span></button>
      <ul class="dropdown-menu">
        <li><a href="#">Comment</a></li>
        <li><a href="#">Post</a></li>
        <li class="divider"></li>
        <li><a href="#">Group</a></li>
      </ul>
    </div>
    <div class="btn-group">
      <button class="btn btn-danger dropdown-toggle" data-toggle="dropdown">Delete <span class="icon-caret-down"></span></button>
      <ul class="dropdown-menu">
        <li><a href="#">Comment</a></li>
        <li><a href="#">All comments</a></li>
      </ul>
    </div>
  </div>
</div>
{% endhighlight %}
