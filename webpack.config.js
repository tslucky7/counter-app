const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/js/index.ts",
  output: {
    path: `${__dirname}/dist/`,
    filename: 'bundle.js',
  },
  mode: 'development',
  devtool: "source-map",
  module: {
    rules: [
      {
      //拡張子cssのファイル（正規表現）
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        //拡張子tsの場合
        test: /\.ts$/,
        //TypeScriptをコンパイルするためのts-loaderを使用
        use: "ts-loader",
      }
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    //import文で.tsファイルを指定できるようにする 書き方：拡張子を配列で指定する
    extensions: [".ts", ".js"],
  },
  devServer: {
    static: {
      directory: "./dist",
    },
  },
};