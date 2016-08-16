var path = require("path"),
	  webpack = require("webpack"),
	  ExtractTextPlugin = require('extract-text-webpack-plugin'),
	  autoprefixer = require('autoprefixer'),
	  HtmlWebpackPlugin = require('html-webpack-plugin'),
	  ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin'),
	  StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin'),
	  webServer = '159.203.242.5:3333';

module.exports = {
	resolve: { //Resolves JSX Imports
		extensions: ["", ".js", ".jsx"]
	},
  entry: { //Entry Point for Webpack
	  app: [
		  "./app/app.jsx",
		  "./sass/preloader/preload.sass",
		  "./sass/entry.sass"
	  ],
  },
	output: {
		path: __dirname + "/dist/",
		filename: "bundle.[hash].js" //Bundled Javascript Webpack Spits out.
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
			{ //Loads the preloader sass as inline styles
				test: /\.sass$/,
				include: __dirname + "/sass/preloader/",
				loader: StyleExtHtmlWebpackPlugin.inline('postcss-loader!sass-loader?indentedSyntax')
			},
      { //Converts SASS to CSS and also performs relevant pathing and auto-prefixes
        test: /\.sass$/,
	      exclude: __dirname + "/sass/preloader/",
	      loader: ExtractTextPlugin.extract('css-loader?sourceMap!postcss-loader!resolve-url!sass-loader?indentedSyntax') // Extracts main.css to separate file
      },
			{ //Loads the font files from imports
				test:  /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
				loader: 'file-loader?name=./assets/fonts/[name].[ext]&context=./assets'
			},
			{ //Optimizes Images
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file?hash=sha512&digest=hex&name=./assets/min-icons/[hash].[ext]',
					'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=true&progressive=true'
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
	postcss: [ autoprefixer({ remove: true, browsers: ['> 5%'] }) ],
  plugins: [
	  new StyleExtHtmlWebpackPlugin({
		  minify: true
	  }),
	  new ExtractTextPlugin("main.[hash].css"),
	  new webpack.DefinePlugin({
		  SERVER_ADDRESS: JSON.stringify(`http://${webServer}`),
		  'process.env': {
			  'NODE_ENV': JSON.stringify('production')
		  }
	  }),
	  new webpack.ProvidePlugin({
		  socket: 'window.io'
	  }),
	  new webpack.NormalModuleReplacementPlugin(/\/iconv-loader$/, 'node-noop'),  // Prevent Error with Smooch for webpack
	  new webpack.optimize.DedupePlugin(),
	  new webpack.optimize.UglifyJsPlugin({
	  	sourceMap: false,
		  compress: {
			  warnings: false,
			  drop_console: true
		  },
		  comments: false
	  }),
	  new HtmlWebpackPlugin({
		  template: __dirname + "/app/index.html",
		  filename: "index.html",
		  inject: "body",
		  minify: {
			  collapseWhitespace: true,
			  removeComments: true,
			  removeRedundantAttributes: true
		  }
	  }),
	  new ScriptExtHtmlWebpackPlugin({
		  defaultAttribute: 'async'
	  })
  ]
};