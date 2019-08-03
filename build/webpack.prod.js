const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const TerserJSPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = merge(base, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        parallel: true,
        cache: true,
        sourceMap: true,
        terserOptions: {
          parse: {
            // Let terser parse ecma 8 code but always output
            // ES5 compliant code for older browsers
            ecma: 8,
          },
        },
      }),
    ],
  },
  plugins: [
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      cache: true,
      test: /\.(js|css|html|json|ico|svg|eot|otf|ttf|map)$/,
    }),
  ],
});
