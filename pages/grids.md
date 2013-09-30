---
layout: default
title:  Grids and Responsive Design
permalink: /grids_and_responsive_design/
---

# Grids and Responsive Design
Assets v3.0 have support for building systems with responsive design and it is meant to be used by systems with responsive design. This does of course not mean that your non-responsive system suddenly will be responsive when you link in the asset bundles. You will have to do your homework first.

We use page grids based on twelve columns: the page is dived into twelve columns available for content to span over. This gives you a good flexibility to arrange the page content and to apply different grids for different device widths using breakpoints in media queries. Some common grids are 3-6-3, 4-4-4, 8-4, 6-6 or 12 (just one column). If your approach is mobile first you will probably start with a single column (12) and transform to something like a 6-6 grid and then 3-6-3 above certain breakpoints. A desktop first approach will go the other way. See code examples below.

Do not put the grid formatting in the markup. Use symantic class names or elements in the markup and use CSS to create the grid and media queries to make it responsive as seen below.

You can fork the `columns()` mixin from the [assets code](https://github.com/malmostad/intranet-assets/blob/master/app/assets/stylesheets/mixins.css.scss) and use it to create your responsive grids. The live example grid below shows how a 3-6-3 grid turns into a 6-6 + 12 grid below the breakpoint 50em and a 12 + 12 + 12 vertical layout below 40em. If your approach is mobile first, start with the vertical layout and apply media queries when the width exceeds your breakpoints.

<div class="example">
  <div class="grid-example">
    <nav>Nav</nav>
    <article>Article</article>
    <aside>Aside</aside>
  </div>
</div>

{% highlight html %}
<div class="grid-example">
  <nav>Nav</nav>
  <article>Article</article>
  <aside>Aside</aside>
</div>
{% endhighlight %}

{% highlight scss %}
nav {
  @include columns(3);
}
article {
  @include columns(6);
}
aside {
  @include columns(3, true);
}

@media (max-width: 50em) {
  nav {
    @include columns(6);
  }
  article {
    @include columns(6, true);
  }
  aside {
    @include columns(12);
  }
}

@media (max-width: 40em) {
  nav {
    @include columns(12);
  }
  article {
    @include columns(12);
  }
}
{% endhighlight %}

The first argument for the `columns()` mixin specifies the number of columns that the block should span over. The second is optional and specifies if the column is the last in the row (no gutter to the right then). Defaults to false. Forced to true if the number of columns is 12. The third argument is the gutter given in percentage of the total page content. Defaults to 2%.

## Roll Your Own RWD Grid
You can use your own CSS code or a CSS framework to create the grids if that works best for you as long as the final results is the same.

## Page Width
The maximal width of a page type should be set based on the type of content it contains. A page with article content should e.g. have a width that makes the text line length optimized for readability. An application view with spreadsheet like data might do better with a page width of 100% of the device.

## Sub Grids
Use the same concept, and the same code, as you do for page grids to create sub grids. The bottom of the article box in the example above can be devided into two sub columns using `columns(6)`. It would typically be adjusted to `columns(12)` below a certain breakpoint.
