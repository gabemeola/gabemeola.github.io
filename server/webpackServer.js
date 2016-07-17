var webpack = require("webpack"),
		WebpackDevServer = require("webpack-dev-server"),
		config = require("../webpack.config");

module.exports = (PORT, ADDRESS) => {
	const server = new WebpackDevServer(webpack(config), {
		proxy: {
			"*" : `http://${ADDRESS}:${PORT - 10}`
		},
		progress: true,
		stats: {
			progress: true,
			colors: true
		}
	});
	server.listen(PORT, '0.0.0.0');
	console.log(`Webpack Server starting at: http://${ADDRESS}:${PORT}`)
};