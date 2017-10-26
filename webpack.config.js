module.exports = {
  entry: './src/Delay.js',
  output: {
    path: __dirname,
    filename: 'lib/Delay.js',
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
  }
};
