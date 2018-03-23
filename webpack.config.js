
/*
npm i -g webpack@3.8.1
npm i -D webpack@3.8.1 html-webpack-plugin clean-webpack-plugin extract-text-webpack-plugin webpack-dev-server 

npm i -D  postcss-px2rem style-loader css-loader css-loader postcss-loader
npm i -D  babel-core babel-preset-env babel-loader

*/

const path = require("path");
var px2rem = require("postcss-px2rem");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");

//指定需要清除的目录名
let pathsToClean = ["dist"];

module.exports = {
	entry: './path/to/my/entry/file.js',
	  
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'my-first-webpack.bundle.js'
	},
	plugins:[
		//分离css成单独的文件
		new ExtractTextPlugin("style.css"),
		//new ExtractTextPlugin("[name].[chunkhash].css"),
		//new ExtractTextPlugin("style.css",{allChunks: true}),
		//清理文件
		new CleanWebpackPlugin(pathsToClean),
	],
	module:{
		loaders: [
		  {
			test: /\.css$/,
			loader: "style-loader!css-loader!postcss-loader"
		  }
		]	
	},
	postcss: function() {
		return [px2rem({remUnit: 75})];
	}
};






