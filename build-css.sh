#!/usr/bin/env bash

shopt -s globstar
for css_in in **/assets/css/*.css
do
    css_out=${css_in/assets/assets/build}
    css_out=${css_out%.css}
    mkdirp ${css_out%/*}/
    postcss $css_in -u autoprefixer | cleancss -o $css_out.min.css --skip-rebase
done
