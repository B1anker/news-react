const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');

module.exports = {
	context: path.join(__dirname),
	devtool: debug
		? "inline-sourcemap"
		: null,
	resolve: {
		alias: {
			'@': __dirname + '/src'
		}
	},
	entry: "./src/js/index.js",
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: [
						'react', 'es2015'
					],
					plugins: [
						'react-html-attrs',
						[
							"import", {
								"libraryName": "antd",
								"libraryDirectory": "lib", // default: lib
								"style": "css"
							}
						]
					], //添加组件的插件配置
				}
			},
			//下面是使用 ant-design 的配置文件
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}, {
				test: /\.scss/,
				loader: 'style-loader!css-loader!sass-loader'
			}
		]
	},
	output: {
		path: __dirname + '/src',
		publicPath: '/src/',
		filename: "bundle.js"
	},
	externals: {
    "react": 'React',
		"react-dom": 'ReactDOM',
		"fetch": 'fetch'
  },
	plugins: debug
		? []
		: [
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.OccurenceOrderPlugin(),
			new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})
		]
};
