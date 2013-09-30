---
layout: default
title:  Forms
permalink: /forms/
---

# Forms
We use [Bootstrap](http://getbootstrap.com/) markup for forms. The styling is slightly different from Bootstrap, but you shouldn't have to worry about that as long as you use the correct markup.

To apply the styling to your forms, you need to use the `malmo-form` class in the `form` element or outside it. This means that you can set it in the `body` element or in a global wrapper to have all your forms styled.

## Responsive Forms
The form will switch to a vertically layout when the device width is under 46em. This is applied in a global media query. If your layout requires that your forms, or some of them, gets the vertically layout above 46em, if you e.g. have a form in a narrow box, you can use the `form-force-vertical()` Sass mixin found in the [mixins file](https://github.com/malmostad/intranet-assets/blob/master/app/assets/stylesheets/mixins.css.scss#L67). Apply it in a media query in your application specific assets.


## Exceptions
If you are deploying an off-the-rack system at City of Malmö that has it's own form styling that can't be normalized or you can't alter the form markup, you can ommit the `malmo-form` class. This requires an approved exception from kominteamet@malmo.se.

## Single Field Forms
An input field used together with an action button, most often used for search forms.

<div class="example">
  <form action="/search" method="get" class="malmo-form">
    <section>
      <div class="input-append">
        <input type="text" placeholder="Type a search text"/>
        <input type="submit" class="btn" value="Search"/>
      </div>
    </section>
  </form>
</div>

{% highlight html %}
<form action="/search" method="get" class="malmo-form">
  <section>
    <div class="input-append">
      <input type="text" placeholder="Type a search text"/>
      <input type="submit" class="btn" value="Search"/>
    </div>
  </section>
</form>
{% endhighlight %}


## Multiple Fields Forms

<div class="example">
  <form action="/fox" method="post" class="form-horizontal malmo-form">
    <section>
      <p class="help">
        Some instructions to the form may, or may not, be necessary. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation.
      </p>

      <div class="control-group">
        <label for="person-name" class="control-label">Name:*</label>
        <div class="controls">
          <input type="text" id="person-name" name="person-name" class="input-wide" placeholder="e.g. Joan Doe"/>
        </div>
      </div>
      <div class="control-group">
        <label for="email" class="control-label">Email address:*</label>
        <div class="controls">
          <input type="email" id="email" name="email" class="input-wide" placeholder="e.g. joan.doe@malmo.se"/>
          <p class="help-inline">
            Inline help for a form control.
          </p>
        </div>
      </div>

      <div class="control-group">
        <label for="something" class="control-label">Say something:</label>
        <div class="controls">
          <input type="text" id="something" name="something" placeholder="Speak up!" class="input-wide"/>
          <label class="radio inline">
            <input type="radio" name="something-boolean" value="true"/>
            Always
          </label>
          <label class="radio inline">
            <input type="radio" name="something-boolean" value="false"/>
            Sometimes
          </label>
        </div>
      </div>

      <div class="control-group">
        <div class="control-label">Colors (many choices):*</div>
        <div class="controls">
          <label class="checkbox">
            <input type="checkbox" name="color" value="red"/>
            Red
          </label>
          <label class="checkbox">
            <input type="checkbox" name="color" value="green"/>
            Green
          </label>
          <label class="checkbox">
            <input type="checkbox" name="color" value="blue"/>
            Blue
          </label>
          <label class="checkbox">
            <input type="checkbox" name="color" value="yellow"/>
            Yellow
          </label>
          <label class="checkbox">
            <input type="checkbox" name="color" value="pink"/>
            Pink
          </label>
          <label class="checkbox">
            <input type="checkbox" name="color" value="black"/>
            Black
          </label>
          <label class="checkbox">
            <input type="checkbox" name="color" value="red"/>
            Red
          </label>
          <label class="checkbox">
            <input type="checkbox" name="color" value="green"/>
            Green
          </label>
          <label class="checkbox">
            <input type="checkbox" name="color" value="blue"/>
            Blue
          </label>
          <label class="checkbox">
            <input type="checkbox" name="color" value="yellow"/>
            Yellow
          </label>
        </div>
      </div>

      <div class="control-group">
        <div class="control-label">Colors (just some):</div>
        <div class="controls">
          <label class="checkbox inline">
            <input type="checkbox" name="color-2" value="red"/>
            Red is a color
          </label>
          <label class="checkbox inline">
            <input type="checkbox" name="color-2" value="green"/>
            Green
          </label>
          <label class="checkbox inline">
            <input type="checkbox" name="color-2" value="blue"/>
            Blue
          </label>
        </div>
      </div>

      <div class="control-group">
        <div class="control-label">Shape:</div>
        <div class="controls">
          <label class="radio inline">
            <input type="radio" name="shape" value="circle"/>
            Circle
          </label>
          <label class="radio inline">
            <input type="radio" name="shape" value="square"/>
            Square
          </label>
          <label class="radio inline">
            <input type="radio" name="shape" value="n/a"/>
            N/A
          </label>
        </div>
      </div>

      <div class="control-group">
        <div class="controls">
          <input type="submit" value="Save" class="btn btn-primary"/>
          <input type="button" value="Cancel" class="btn"/>
        </div>
      </div>
    </section>
  </form>
</div>

{% highlight html %}
<form action="/fox" method="post" class="form-horizontal malmo-form">
  <section>
    <p class="help">
      Some instructions to the form may, or may not, be necessary. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation.
    </p>

    <div class="control-group">
      <label for="person-name" class="control-label">Name:*</label>
      <div class="controls">
        <input type="text" id="person-name" name="person-name" class="input-wide" placeholder="e.g. Joan Doe"/>
      </div>
    </div>
    <div class="control-group">
      <label for="email" class="control-label">Email address:*</label>
      <div class="controls">
        <input type="email" id="email" name="email" class="input-wide" placeholder="e.g. joan.doe@malmo.se"/>
        <p class="help-inline">
          Inline help for a form control.
        </p>
      </div>
    </div>

    <div class="control-group">
      <label for="something" class="control-label">Say something:</label>
      <div class="controls">
        <input type="text" id="something" name="something" placeholder="Speak up!" class="input-wide"/>
        <label class="radio inline">
          <input type="radio" name="something-boolean" value="true"/>
          Always
        </label>
        <label class="radio inline">
          <input type="radio" name="something-boolean" value="false"/>
          Sometimes
        </label>
        <div class="help-inline">
          Some inline help. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
      </div>
    </div>

    <div class="control-group">
      <div class="control-label">Colors (many choices):*</div>
      <div class="controls">
        <label class="checkbox">
          <input type="checkbox" name="color" value="red"/>
          Red
        </label>
        <label class="checkbox">
          <input type="checkbox" name="color" value="green"/>
          Green
        </label>
        <label class="checkbox">
          <input type="checkbox" name="color" value="blue"/>
          Blue
        </label>
        <label class="checkbox">
          <input type="checkbox" name="color" value="yellow"/>
          Yellow
        </label>
        <label class="checkbox">
          <input type="checkbox" name="color" value="pink"/>
          Pink
        </label>
        <label class="checkbox">
          <input type="checkbox" name="color" value="black"/>
          Black
        </label>
        <label class="checkbox">
          <input type="checkbox" name="color" value="red"/>
          Red
        </label>
        <label class="checkbox">
          <input type="checkbox" name="color" value="green"/>
          Green
        </label>
        <label class="checkbox">
          <input type="checkbox" name="color" value="blue"/>
          Blue
        </label>
        <label class="checkbox">
          <input type="checkbox" name="color" value="yellow"/>
          Yellow
        </label>
      </div>
    </div>

    <div class="control-group">
      <div class="control-label">Colors (just some):</div>
      <div class="controls">
        <label class="checkbox inline">
          <input type="checkbox" name="color-2" value="red"/>
          Red is a color
        </label>
        <label class="checkbox inline">
          <input type="checkbox" name="color-2" value="green"/>
          Green
        </label>
        <label class="checkbox inline">
          <input type="checkbox" name="color-2" value="blue"/>
          Blue
        </label>
      </div>
    </div>

    <div class="control-group">
      <div class="control-label">Shape:</div>
      <div class="controls">
        <label class="radio inline">
          <input type="radio" name="shape" value="circle"/>
          Circle
        </label>
        <label class="radio inline">
          <input type="radio" name="shape" value="square"/>
          Square
        </label>
        <label class="radio inline">
          <input type="radio" name="shape" value="n/a"/>
          N/A
        </label>
      </div>
    </div>

    <div class="control-group">
      <div class="controls">
        <input type="submit" value="Save" class="btn btn-primary"/>
        <input type="button" value="Cancel" class="btn"/>
      </div>
    </div>
  </section>
</form>
{% endhighlight %}

## Form Validation
Summarize what needs to be corrected at the top of the form. Add the `warning` class to the `control-group` that needs to be corrected along with a `help-inline` message.

<div class="example">
  <form action="/fox" method="post" class="form-horizontal malmo-form">
    <section>
      <p class="help">
        Some instructions to the form may, or may not, be necessary. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation.
      </p>
      <div class="warning">
        Please correct the marked fields below.
      </div>

      <div class="control-group">
        <label for="person-name-1" class="control-label">Name:*</label>
        <div class="controls">
          <input type="text" id="person-name-1" name="person-name" class="input-wide" value="Joan Doe"/>
        </div>
      </div>
      <div class="control-group warning">
        <label for="email-1" class="control-label">Email address:*</label>
        <div class="controls">
          <input type="email" id="email-1" name="email" class="input-wide"/>
          <span class="help-inline">Please enter your email address</span>
        </div>
      </div>

      <div class="control-group warning">
        <div class="control-label">Colors:*</div>
        <div class="controls">
          <label class="checkbox">
            <input type="checkbox" name="color" value="red"/>
            Red
          </label>
          <label class="checkbox">
            <input type="checkbox" name="color" value="green"/>
            Green
          </label>
          <label class="checkbox">
            <input type="checkbox" name="color" value="blue"/>
            Blue
          </label>
          <label class="checkbox">
            <input type="checkbox" name="color" value="yellow"/>
            Yellow
          </label>
          <label class="checkbox">
            <input type="checkbox" name="color" value="pink"/>
            Pink
          </label>
          <label class="checkbox">
            <input type="checkbox" name="color" value="black"/>
            Black
          </label>
          <span class="help-inline">Please select a color</span>
        </div>
      </div>

      <div class="control-group">
        <div class="controls">
          <input type="submit" value="Save" class="btn btn-primary"/>
          <input type="button" value="Cancel" class="btn"/>
        </div>
      </div>
    </section>
  </form>
</div>

{% highlight html %}
<form action="/fox" method="post" class="form-horizontal malmo-form">
  <section>
    <p class="help">
      Some instructions to the form may, or may not, be necessary. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation.
    </p>
    <div class="warning">
      Please correct the marked fields below.
    </div>
    <div class="control-group">
      <label for="person-name-1" class="control-label">Name:*</label>
      <div class="controls">
        <input type="text" id="person-name-1" name="person-name" class="input-wide" value="Joan Doe"/>
      </div>
    </div>
    <div class="control-group warning">
      <label for="email-1" class="control-label">Email address:*</label>
      <div class="controls">
        <input type="email" id="email-1" name="email" class="input-wide"/>
        <span class="help-inline">Please enter your email address</span>
      </div>
    </div>

    <div class="control-group warning">
      <div class="control-label">Colors:*</div>
      <div class="controls">
        <label class="checkbox">
          <input type="checkbox" name="color" value="red"/>
          Red
        </label>
        <label class="checkbox">
          <input type="checkbox" name="color" value="green"/>
          Green
        </label>
        <label class="checkbox">
          <input type="checkbox" name="color" value="blue"/>
          Blue
        </label>
        <label class="checkbox">
          <input type="checkbox" name="color" value="yellow"/>
          Yellow
        </label>
        <label class="checkbox">
          <input type="checkbox" name="color" value="pink"/>
          Pink
        </label>
        <label class="checkbox">
          <input type="checkbox" name="color" value="black"/>
          Black
        </label>
        <span class="help-inline">Please select a color</span>
      </div>
    </div>

    <div class="control-group">
      <div class="controls">
        <input type="submit" value="Save" class="btn btn-primary"/>
        <input type="button" value="Cancel" class="btn"/>
      </div>
    </div>
  </section>
</form>
{% endhighlight %}


## Autocomplete
[jQueryUI Autocomplete](http://jqueryui.com/autocomplete/) is available in the assets with a custom styling. Here is an example how you used it with the City of Malmö's map service. The service has a jsonp interface.

<div class="example">
  <form action="/fox" method="get" class="malmo-form">
    <section>
      <div class="input-append">
        <input id="street-name" type="text" placeholder="Street name"/>
        <input type="submit" class="btn" value="Submit"/>
      </div>
    </section>
  </form>
</div>

{% highlight html %}
<form action="/fox" method="get" class="malmo-form">
  <section>
    <div class="input-append">
      <input id="street-name" type="text" placeholder="Street name"/>
      <input type="submit" class="btn" value="Submit"/>
    </div>
  </section>
</form>
{% endhighlight %}

{% highlight coffeescript %}
$("#street-address").autocomplete
  source: (request, response) ->
    $.ajax
      url: "//xyz.malmo.se/rest/1.0/addresses/"
      dataType: "jsonp"
      data:
        q: request.term
        items: 10
      success: (data) ->
        response $.map data.addresses, (item) ->
          label: "#{item.name} (#{item.towndistrict})"
          value: item.name
  minLength: 2
{% endhighlight %}
