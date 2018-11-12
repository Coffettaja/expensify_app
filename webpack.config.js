const path = require('path')
// extracts text from the bundle.js to its own file
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// On this object, all the configuration details for webpack build are defined.
// module.exports is a way to expose something to other files.
module.exports = (env) => {
  const isProduction = env === 'production'
  // argument is the filename of the extracted text
  const CSSExtract = new ExtractTextPlugin('styles.css')

  return {
    entry: './src/app.js',
    // entry: './src/playground/hoc.jsx',
    output: {
      // ABSOLUTE PATH were the webpack file is output.
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader', // Need this to run the files through babel
        test: /\.js$/,  // Test that the file ends with .js
        exclude: /node_modules/ // Exclude the files in node_modules folder
      }, {
        test: /\.(sass|css)$/,
        use: CSSExtract.extract({
          use: [
            {
              loader:'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    plugins: [
      CSSExtract
    ],
    // 'source-map' takes a lot more time to build, but it only loads when the dev tools are opened, so it does not slow down normal visitors
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true // tells the devServer that the routing is handled client-side, and therefore the index.html page should be served for all 404 routes
    }
  }
}