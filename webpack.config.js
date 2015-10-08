module.exports = {
  entry: './src/Delay.js',
  output: {
    path: __dirname,
    filename: 'lib/Delay.js',
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
  }
};
