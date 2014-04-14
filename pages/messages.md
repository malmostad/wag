---
layout: default
title:  Messages
permalink: /messages/
---

# Messages
There are three kind of response messages. Use the warning message when the user needs to take an action, e.g. correcting a form field. The error message must only be used when the system, or a background system, fails.

<div class="example">
  <div class="success">Your profile was updated</div>
  <div class="warning">Please correct the indicated fields below</div>
  <div class="error">Your account can not be displayed. Please try again later.</div>
</div>
{% highlight html %}
<div class="success">Your profile was updated</div>
<div class="warning">Please correct the indicated fields below</div>
<div class="error">Your account can not be displayed. Please try again later.</div>
{% endhighlight %}
