const mix = require('laravel-mix');

mix.js('js/main.js', 'dist/js/bundle.js')
   .sass('css/style.scss', 'dist/css/style.css');
