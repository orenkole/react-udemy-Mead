// entry -> output
const path = require('path'); // loading nodeJS function 'path'
console.log(__dirname);

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
      new MiniCssExtractPlugin({filename: 'styles.css'})
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