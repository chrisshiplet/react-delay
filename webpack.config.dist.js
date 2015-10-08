var webpack = require("webpack");

module.exports = {
  entry: './src/Delay.js',
  output: {
    path: __dirname,
    filename: 'dist/delay.min.js',
    library: 'Delay',
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'react'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
