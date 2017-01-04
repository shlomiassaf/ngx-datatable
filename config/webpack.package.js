const fs = require('fs');
const path = require('path');
const helpers = require('./helpers');
const webpack = require('webpack');

/**
 * Webpack Plugins
 */
const DefinePlugin = require('webpack/lib/DefinePlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const BannerPlugin = webpack.BannerPlugin;

const APP_VERSION = JSON.stringify(require('../package.json').version);
const banner =
  `/**
 * ngx-data-table v${APP_VERSION} (https://github.com/swimlane/ngx-data-table)
 * Copyright 2016-2017
 * Licensed under MIT
 */`;

module.exports = {
  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.js']
  },

  entry: helpers.root('src/lib/index.ts'),

  output: {
    path: helpers.root('.'),
    publicPath: '/',
    filename: 'dist_package/bundle/ngx-datatable.umd.js',
    libraryTarget: 'umd',
    library: 'ngx-datatable'
  },

  // require those dependencies but don't bundle them
  externals: [/^\@angular\//, /^rxjs\//],

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader?{transpileOnly: true, configFileName: "tsconfig.webpack.json"}',
        exclude: [/\.e2e\.ts$/]
      }
    ]
  },

  plugins: [
    // fix the warning in ./~/@angular/core/src/linker/system_js_ng_module_factory_loader.js
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('./src')
    ),
    new BannerPlugin({
      banner: banner,
      raw: true,
      entryOnly: true
    }),

    new CopyWebpackPlugin([
      { from: 'README.md', to: helpers.root('./dist_package') },
      { context: 'src/lib', from: '**/*.scss', to: helpers.root('./dist_package') },
    ]),

    function() {
      // THIS FILE IS MERGED INTO package.json AND COPIED TO dist_package
      // IT ONLY MERGE THE TOP-LEVEL PROPERTIES (NOT DEEP)
      this.plugin('done', function(stats) {
        const pkgDest = path.join(__dirname, '..', 'dist_package', 'package.json');
        const merged = Object.assign(require('../package.json'), require('../package.dist-merge.json'));

        fs.writeFileSync(pkgDest, JSON.stringify(merged, null, '\t'));

      })
    }
  ]
};
