var webpackServer = require("./server/webpackServer"),
		apiServer = require("./server/apiServer"),
		ifaces = require('os').networkInterfaces(),
		ADDRESS;
// Finds out your local IP address
for (var dev in ifaces) {
	ifaces[dev].filter((details) => details.family === 'IPv4' && details.internal === false ? ADDRESS = details.address: undefined);
}

const PROD  = process.env.NODE_ENV === "production";
const PORT = process.env.PORT ? process.env.PORT : process.env.PORT = 8080;

if (PROD) {
	apiServer(PORT, ADDRESS);
} else {
	apiServer(PORT - 10);
	webpackServer(PORT, ADDRESS);
}