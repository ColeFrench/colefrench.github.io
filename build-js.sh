#!/usr/bin/env bash

shopt -s globstar
for js_in in **/assets/js/*.js
do
    js_out=${js_in/assets/assets/build}
    js_out=${js_out%.js}
    mkdirp ${js_out%/*}/
    uglifyjs $js_in -o $js_out.min.js -mc
done
