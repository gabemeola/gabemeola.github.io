var path = require("path"),
	webpack = require("webpack"),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	autoprefixer = require('autoprefixer');
module.exports = {
	entry: { //Entry Point for Webpack
		app: ["./app/app.jsx", "./sass/entry.sass"],
		extensions: ["", ".js", ".jsx"]
	},
	output: {
		path: "public/",
		filename: "bundle.js",
		publicPath: "//localhost:3333/public/"//Bundled Javascript Webpack Spits out.
	},
	devServer: { //Allows webpack-dev-server to be live reloaded
		inline: true,
		hot: true,
		port: 3333,
		watch: true
	},
	module: {
		loaders: [
			{ //Babel loader for converting ES2015 to ES5
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{ //Converts SASS to CSS
				test: /\.sass$/,
				loader: ExtractTextPlugin.extract('css-loader?sourceMap!postcss-loader!resolve-url!sass-loader?indentedSyntax')
			},
			{ //Loads the font files from imports
				test:  /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
				loader: 'file-loader?name=./assets/fonts/[name].[ext]&context=./assets'
			},
			{ //Optimizes Images
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file?hash=sha512&digest=hex&name=./assets/min-imgs/[hash].[ext]',
					'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false&progressive=true'
				]
			},
			{ //Loads HTML imports/requires
				test: /\.html$/,
				loader: "html"
			}
		]
	},
	//Config for Post-CSS and AutoPrefixer
	postcss: [ autoprefixer({ remove: false, browsers: ['last 2 versions'] }) ],
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin("main.css")
	]
};