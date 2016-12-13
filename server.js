const webpackServer = require("./server/webpackServer");
const apiServer = require("./server/apiServer");
const os = require('os');
const ADDRESS = getLocalIp();
// Finds out your local IP address
function getLocalIp() {
	const ifaces = os.networkInterfaces();
	let address;
	Object.keys(ifaces).forEach((dev) => ifaces[dev].filter((details) => details.family === 'IPv4' && details.internal === false ? address = details.address : false));

	return address || '0.0.0.0';
}

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 8080;
console.log(`Node Environment Set To ${ENV}`);

if (ENV === 'production') {
	apiServer(PORT, ADDRESS);
} else if (ENV === 'development') {
	apiServer(PORT - 10);
	webpackServer(PORT, ADDRESS);
}

console.log('Address', ADDRESS);