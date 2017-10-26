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
    'react': 'react',
    'prop-types': 'prop-types'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['latest', 'react', 'stage-0']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
