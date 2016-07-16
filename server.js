var webpackServer = require("./server/webpackServer"),
		apiServer = require("./server/apiServer");

const PROD  = process.env.NODE_ENV === "production";
const PORT = process.env.PORT ? process.env.PORT : process.env.PORT = 8080;

if (PROD) {
	apiServer(PORT);
} else {
	apiServer(PORT - 10);
	webpackServer(PORT);
}