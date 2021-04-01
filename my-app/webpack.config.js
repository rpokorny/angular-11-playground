/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { AngularCompilerPlugin } = require('@ngtools/webpack');
const path = require('path');

module.exports = function() {
  return {
    mode: 'development',
    entry: './src/main.ts',
    output: {
      filename: 'bundle.js',
      publicPath: '/'
    },
    resolve: {
      symlinks: false,
      extensions: ['.ts', '.js']
    },
    module: {
      rules: [{
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
        loader: '@ngtools/webpack'
      }, {
        test: /\.html$/i,
        loader: 'html-loader',
      }, {
        test: /\.css$/i,
        loader: 'raw-loader',
      }]
    },
    plugins: [
      new AngularCompilerPlugin({
        tsConfigPath: './tsconfig.json',
        entryModule: 'src/app/app.module#AppModule'
      })
    ],
    devtool: 'eval-source-map',
    devServer: {
      port: 4043,
      host: '0.0.0.0',
      publicPath: '/',
      contentBase: path.join(__dirname, 'src')
    },
    snapshot: {
      managedPaths: []
    }
  };
};



