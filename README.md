Web Application Guidelines v4
==============================

This repo contains the the Table of Contents page for different versions of The City of Malmö’s Web Application Guidelines available for reading at http://malmo.se/wag/.

## Editing the Guidelines
Content is written in markdown using the [kramdown](http://kramdown.rubyforge.org/syntax.html) dialect and the pages are found in the `pages` directory in the `gh-pages` branch. You can edit the pages in your web browser. Changes and new pages are queued for publishing when you save them and will most often be published immediately.

The publishing is using [GitHub Pages](https://pages.github.com/) witch is a hook that publish a [Jekyll](http://jekyll.io) site when something in the `gh-pages` branch is saved.

## Development and Extensive Editing

You need Ruby 2.x with bundler on your machine.

Checkout the `gh-pages`. To install Jekyll and the dependencies, run:

    $ bundle install

## License
Released under AGPL version 3.
