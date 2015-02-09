var webpack = require('webpack')
  , path = require('path');

module.exports = {
  devtool: 'eval',
  entry: [
    './scripts/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  plugins: [],
  resolve: {
    fallback: [
      path.resolve(__dirname, '..', 'bower_components')
    ],
    alias: {
      scripts: path.join(__dirname, '/scripts'),
      styles: path.join(__dirname, '/styles'),
      react: 'react/addons',
      'react/addons/lib': 'react/../lib', // A workaround for react/lib to be resolved correctly.
    },
    extensions: ['', '.js', '.css']
  },
  module: {
    loaders: [
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.js$/, loaders: ['jsx?harmony'], exclude: /node_modules/ },
      { test: /\.woff/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)/, loader: "file-loader" }
    ]
  }
};

// Setup hot realod.
if (global.hot) {
  module.exports.entry = [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server'
  ].concat(module.exports.entry);

  module.exports.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ].concat(module.exports.plugins);

  module.exports.module.loaders.forEach(function (loader) {
    if (loader.test === /\.js$/) {
      loader.loaders.unshift('react-hot');
    }
  });
}
