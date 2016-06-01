var path = require("path"),
    webpack = require("webpack"),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
		autoprefixer = require('autoprefixer'),
		HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	resolve: { //Resolves ES2015 Imports
		extensions: ["", ".js", ".jsx"]
	},
  entry: { //Entry Point for Webpack
	  app: ["./app/app.jsx", "./sass/entry.sass"]
  },
	output: {
		path: __dirname + "/dist/",
		filename: "bundle.js" //Bundled Javascript Webpack Spits out.
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
      { //Converts SASS to CSS and also performs relevant pathing and auto-prefixes
        test: /\.sass$/,
	      loader: ExtractTextPlugin.extract('css-loader?sourceMap!postcss-loader!resolve-url!sass-loader?indentedSyntax')
      },
			{ //Loads the font files from imports
				test:  /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
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
				loader: "html"
			}
		]
	},
	//Config for Post-CSS and AutoPrefixer
	postcss: [ autoprefixer({ remove: false, browsers: ['last 2 versions'] }) ],
  plugins: [
	  new ExtractTextPlugin("main.css"),
	  new HtmlWebpackPlugin({
		  template: __dirname + "/app/index.html",
		  filename: "index.html",
		  inject: "head"
	  })
  ]
};