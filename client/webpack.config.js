var webpack = require('webpack')
  , path = require('path');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './scripts/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    fallback: [
      path.resolve(__dirname, '..', 'bower_components')
    ],
    alias: {
      _: path.join(__dirname, '/scripts'),
      styles: path.join(__dirname, '/styles'),
      react: 'react/addons',
      'react/addons/lib': 'react/../lib', // A workaround for react/lib to be resolved correctly.
    },
    extensions: ['', '.js', '.css']
  },
  module: {
    loaders: [
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.js$/, loaders: ['react-hot', 'jsx?harmony'], exclude: /node_modules/ },
      { test: /\.woff/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)/, loader: "file-loader" }
    ]
  }
};
