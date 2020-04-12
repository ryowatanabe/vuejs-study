const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: "development",

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin()
  ],

  resolve: {
    extensions: [".vue", ".js"]
  },

  entry: {
    index: `./src/index.js`,
  },

  output: {
    path: __dirname + "/out",
    filename: "[name].js"
  }
};
