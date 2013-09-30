---
layout: default
title:  Tables
permalink: /tables/
---

# Tables
Use a standard table markup with `thead` and `tbody` sections to get the correct styling.

Add the `wrap` class for responsive tables. It will be wrap the table in a container with a horizontal scroll added when the device isn't wide enough.

<div class="example">
  <table class="wrap">
    <thead>
      <tr>
        <th>2012</th>
        <th>2013</th>
        <th>2014</th>
        <th>2015</th>
        <th>2016</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lorem ipsum dolor</td>
        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit</td>
        <td>Consectetur adipisicing elit</td>
        <td>Lorem ipsum dol.</td>
        <td>Sed do eiusmod tempor incididunt ut.</td>
      </tr>
      <tr>
        <td>Consectetur adipisicing elit</td>
        <td>Excepteur sint occaecat.</td>
        <td>Incididunt ut labore et dolore magna aliqua.</td>
        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit</td>
        <td>Excepteur sint occaecat.</td>
      </tr>
      <tr>
        <td>Lorem ipsum dolor</td>
        <td>Sed do eiusmod.</td>
        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit</td>
        <td>Consectetur adipisicing elit</td>
        <td>Lorem ipsum dol.</td>
      </tr>
    <tr>
      <td>Lorem ipsum dolor</td>
      <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit</td>
      <td>Excepteur sint occaecat.</td>
      <td>Sed do eiusmod tempor incididunt ut.</td>
      <td>Duis aute irur.</td>
    </tr>
    <tr>
      <td>Incididunt ut labore et dolore magna aliqua.</td>
      <td>Duis aute irur.</td>
      <td>Consectetur adipisicing elit</td>
      <td>Excepteur sint occaecat.</td>
      <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit</td>
    </tr>
    <tr>
      <td>Lorem ipsum dolor</td>
      <td>Excepteur sint occaecat.</td>
      <td>Sed do eiusmod.</td>
      <td>Duis aute irur.</td>
      <td>Psum dol.</td>
    </tr>
    </tbody>
  </table>
</div>
{% highlight html %}
<table class="wrap">
  <thead>
    <tr>
      <th>2012</th>
      <th>2013</th>
      <th>2014</th>
      <th>2015</th>
      <th>2016</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lorem ipsum dolor</td>
      <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit</td>
      <td>Consectetur adipisicing elit</td>
      <td>Lorem ipsum dol.</td>
      <td>Sed do eiusmod tempor incididunt ut.</td>
    </tr>
    ...
  </tbody>
</table>
{% endhighlight %}

## Full Width
Add the class `full` to the table element to get a full width table.
