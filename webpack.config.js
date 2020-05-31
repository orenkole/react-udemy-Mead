// entry -> output
const path = require('path'); // loading nodeJS function 'path'
console.log(__dirname);
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if(process.env.NODE_ENV === 'test') {
  // run some code to set up our test environment variables accessing that test firebase database
  require('dotenv').config({path: '.env.test'});
} else if(process.env.NODE_ENV === 'development') {
  // set up those development environment variables for the development database
  require('dotenv').config({path: '.env.development'});
}

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const isProduction = env === "production";
  console.log(`env: ${env}`)
  return {
    entry: './src/app.js',
    output: {
      // The tricky thing is is that we can't use dot forward slash.  This needs to be an absolute path which means that we have to provide the path to this project on our  machine
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({filename: 'styles.css'}),
      new webpack.DefinePlugin({
        'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
        'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
        'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET)
      })
    ],
    // is isProduction use prod, else use dev source map
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  };
};