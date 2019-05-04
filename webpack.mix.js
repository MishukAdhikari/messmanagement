const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.js('js/main.js', 'dist/js/bundle.js')
   .sass('css/style.scss', 'dist/css/style.css');
