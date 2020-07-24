let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
   'resources/assets/plantilla/css/vendors.min.css',
   'resources/assets/plantilla/css/charts/apexcharts.css',
   'resources/assets/plantilla/css/extensions/tether-theme-arrows.css',
   'resources/assets/plantilla/css/extensions/tether.min.css',
   'resources/assets/plantilla/css/extensions/shepherd-theme-default.css',
   'resources/assets/plantilla/css/bootstrap-extended.css',
   'resources/assets/plantilla/css/bootstrap.css',
   'resources/assets/plantilla/css/bootstrap.min.css',
   'resources/assets/plantilla/css/colors.css',
   'resources/assets/plantilla/css/components.css',
   'resources/assets/plantilla/css/colors.min.css',
   'resources/assets/plantilla/css/themes/dark-layout.css',
   'resources/assets/plantilla/css/themes/semi-dark-layout.css',
   'resources/assets/plantilla/css/core/menu/menu-types/vertical-menu.css',
   'resources/assets/plantilla/css/colors/palette-gradient.css',
   'resources/assets/plantilla/css/pages/dashboard-analytics.css',
   'resources/assets/plantilla/css/style.css',
   'resources/assets/plantilla/css/card-analytics.css',
   'resources/assets/plantilla/css/plugins/tour/tour.css',
],'public/css/all.css').
scripts([
   'resources/assets/plantilla/js/core/libraries/bootstrap.min.js',
   'resources/assets/plantilla/js/core/libraries/jquery.min.js',
   'resources/assets/plantilla/js/vendors.min.js',
   'resources/assets/plantilla/js/scripts/charts/apexcharts.min.js',
   'resources/assets/plantilla/js/scripts/extensions/tether.min.js',
   'resources/assets/plantilla/js/scripts/extensions/shepherd.min.js',
   'resources/assets/plantilla/js/core/app-menu.js',
   'resources/assets/plantilla/js/core/app.js',
   'resources/assets/plantilla/js/core/app.min.js',
   'resources/assets/plantilla/js/scripts/components.js',
   'resources/assets/plantilla/js/scripts/pages/dashboard-analytics.js',
   'resources/assets/plantilla/js/scripts/footer.js',
   'resources/assets/plantilla/js/scripts/components.js',
   'resources/assets/plantilla/js/scripts/customizer.js',
   'resources/assets/plantilla/js/scripts/documentation.js',
   'resources/assets/plantilla/js/scripts/navs/navs.min.js',
   'resources/assets/plantilla/js/scripts/footer.min.js',
],'public/js/all.js')