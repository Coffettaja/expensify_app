const path = require('path')
const webpack = require('webpack')
// extracts text from the bundle.js to its own file ... used for css mostly
const ExtractTextPlugin = require('extract-text-webpack-plugin')


// Heroku sets automatically to 'production'
// 'test' = test environment, undefined = development
process.env.NODE_ENV = process.env.NODE_ENV || 'development' // Stores the enviroment

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.test' })
}

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
      // ABSOLUTE PATH were the bundle.js is output.
      path: path.join(__dirname, 'public', 'dist'),
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
      CSSExtract,
      // Need to use stringify here so actually the string is used in the firebase config and not just the text inside (as in now the result is apiKey: "value", instead of apiKey: value)
      new webpack.DefinePlugin({
        'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
        'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
        'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
      })
    ],
    // 'source-map' takes a lot more time to build, but it only loads when the dev tools are opened, so it does not slow down normal visitors
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true, // tells the devServer that the routing is handled client-side, and therefore the index.html page should be served for all 404 routes
      publicPath: '/dist/'
    }
  }
}