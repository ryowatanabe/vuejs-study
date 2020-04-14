const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin([
      { from: 'static', to: './' },
    ]),
  ],

  resolve: {
    extensions: [".vue", ".js"]
  },

  entry: {
    index: `./src/index.js`,
  },

  output: {
    path: __dirname + "/dist",
    filename: "[name].js"
  }
};
