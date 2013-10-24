---
layout: default
title:  Pagination
permalink: /pagination/
---

# Pagination

## Preferred Way
The preferred way of display large amount of data is to use lazy loading or a simple *Load more* button at the bottom, like so:

<div class="example">
  <button class="btn btn-small" id="load-more">Load more</button>
</div>
{% highlight html %}
<button class="btn btn-small" id="load-more">Load more</button>
{% endhighlight %}

## Classic Pagination
If you for some reason can't use Ajax based loading of more records and need classic pagination, use the following Bootstrap style markup.

<div class="example">
  <div class="pagination">
    <ul>
      <li><a href="#">Previous</a></li>
      <li><a href="#">1</a></li>
      <li class="active"><span>2</span></li>
      <li><a href="#">3</a></li>
      <li><a href="#">4</a></li>
      <li><a href="#">Next</a></li>
    </ul>
  </div>
</div>

{% highlight html %}
<div class="pagination">
  <ul>
    <li><a href="#">Previous</a></li>
    <li><a href="#">1</a></li>
    <li class="active"><span>2</span></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">Next</a></li>
  </ul>
</div>
{% endhighlight %}
