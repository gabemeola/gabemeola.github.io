const path = require("path");
const webpack = require("webpack");
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (PORT, ADDRESS) => (
	{
	resolve: {
		root: path.resolve("./app"), // Allow Easy non-relative imports
		extensions: ["", ".js", ".jsx"] //Resolves JSX Imports
	},
	entry: { //Entry Point for Webpack
		app: [
			`webpack-dev-server/client?http://${ADDRESS}:${PORT}`,
			'webpack/hot/only-dev-server',
			'./app/app.jsx',
			'./sass/preloader/preload.sass',
			'./sass/entry.sass'
		]
	},
	output: {
		path: __dirname + "/dist/",
		filename: "bundle.js",
		publicPath: `http://${ADDRESS}:${PORT}/` //Bundled Javascript Webpack Spits out.
	},
	devtool: 'eval-source-map',
	devServer: { //Allows webpack-dev-server to be live reloaded
		historyApiFallback: true,
		inline: true,
		hot: true,
		port: PORT
	},
	module: {
		loaders: [
			{ //Babel loader for converting ES2015 to ES5
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'react-hmre'],
					plugins: ['transform-object-rest-spread']
				}
			},
			{ //Converts SASS to CSS
				test: /\.sass$/,
				loader: 'style-loader!css-loader?sourceMap!postcss-loader!resolve-url!sass-loader?indentedSyntax&sourceMap'
			},
			{ //Loads the font files from imports
				test:  /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/i,
				loader: 'file-loader?name=./assets/fonts/[name].[ext]&context=./assets'
			},
			{ //Optimizes Images
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file?hash=sha512&digest=hex&name=./assets/min-imgs/[hash].[ext]',
					'image-webpack?bypassOnDebug&optimizationLevel=1&interlaced=false&progressive=false'
				]
			},
			{ //Loads HTML imports/requires
				test: /\.html$/,
				exclude: __dirname + "/app/index.html",
				loader: "html"
			},
			{ // Loads JSON files
				test: /\.json$/,
				loader: "json"
			},
			{ //Disables AMD support for blueimp-load-image for Smooch
				test: /load-image/,
				loader: 'imports?define=>false'
			}
		]
	},
	//Config for Post-CSS and AutoPrefixer
	postcss: [ autoprefixer({ remove: false, browsers: ['>1%','last 2 versions','Firefox ESR'] }) ],
	plugins: [
		new webpack.DefinePlugin({
			SERVER_ADDRESS: JSON.stringify(`http://${ADDRESS}:${PORT}`),
			'process.env': {
				'NODE_ENV': JSON.stringify('development')
			}
		}),
		new webpack.NormalModuleReplacementPlugin(/\/iconv-loader$/, 'node-noop'), // Prevent Error with Smooch for webpack
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: __dirname + "/app/index.html",
			filename: "index.html",
			inject: "body"
		})
	]
	}
);