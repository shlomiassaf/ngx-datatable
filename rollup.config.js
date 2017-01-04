import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'dist_package/src/index.js',
  dest: 'dist_package/bundle/ngx-datatable.rollup.umd.js',
  format: 'umd',
  plugins: [ commonjs({
    ignoreGlobal: false,
  }) ],
  sourceMap: true,
  moduleName: 'ngxDatatable',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/compiler': 'ng.compiler',
    '@angular/platform-browser': 'ng.platformBrowser',
    '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
    'rxjs/Observable': 'Rx',
    'rxjs/Subscription': 'Rx',
    'rxjs/add/observable/fromEvent': 'Rx'
  }
}
