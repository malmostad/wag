#!/usr/bin/env sh

# Run before pushing to Github
echo "Building site"
jekyll build

echo "Converting and compressing Sass files"
cd stylesheets
sass --style compressed application.scss:application.css
cd ..
