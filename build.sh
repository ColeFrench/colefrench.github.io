#!/usr/bin/env bash

shopt -s globstar
for css_in in **/assets/css/*.css
do
    css_out=${css_in/assets/assets/build}
    css_out=${css_out%.css}
    mkdir -p ${css_out%/*}/
    postcss -u autoprefixer -- $css_in | cleancss -o $css_out.min.css
done
for js_in in **/assets/js/*.js
do
    js_out=${js_in/assets/assets/build}
    js_out=${js_out%.js}
    mkdir -p ${js_out%/*}/
    uglifyjs -o $js_out.min.js -mc -- $js_in
done
