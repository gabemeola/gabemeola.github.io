var express = require("express");

module.exports = (PORT) => {
	const app = express();

	app.get("/server", function (req, res) {
		res.send('Proxy is Working')
	});

	app.listen(PORT);
};