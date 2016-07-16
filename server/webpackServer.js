var webpack = require("webpack"),
		WebpackDevServer = require("webpack-dev-server"),
		config = require("../webpack.config"),
		ifaces = require('os').networkInterfaces(),
		address;
// Finds out your local IP address
for (var dev in ifaces) {
	ifaces[dev].filter((details) => details.family === 'IPv4' && details.internal === false ? address = details.address: undefined);
}

module.exports = (PORT) => {
	const server = new WebpackDevServer(webpack(config), {
		proxy: {
			"*" : `http://${address}:${PORT - 10}`
		},
		progress: true,
		stats: {
			progress: true,
			colors: true
		}
	});
	server.listen(PORT, '0.0.0.0');
	console.log(`Webpack Server starting at: http://${address}:${PORT}`)
};