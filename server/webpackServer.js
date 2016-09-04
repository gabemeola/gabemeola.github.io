var webpack = require("webpack"),
		WebpackDevServer = require("webpack-dev-server"),
		config = require("../webpack.config");

module.exports = (PORT, ADDRESS) => {
	const server = new WebpackDevServer(webpack(config), {
		proxy: {
			"**" : {
				target: `http://${ADDRESS}:${PORT - 10}`,
				secure: false
			}
		},
		progress: true,
		hot: true,
		historyApiFallback: false,
		stats: {
			progress: true,
			colors: true
		}
	});
	server.listen(PORT, '0.0.0.0', function(err, result) {
		if(err) throw console.warn(err);
	});
	console.log(`Webpack Server starting at: http://${ADDRESS}:${PORT}`)
};