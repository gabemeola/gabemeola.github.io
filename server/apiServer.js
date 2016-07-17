var express = require("express");

module.exports = (PORT, ADDRESS) => {
	const app = express();

	app.get("/server", function (req, res) {
		res.send('<h1>Proxy is Working</h1>')
	});

	app.listen(PORT, () => console.log(`Server Listening on : http://${ADDRESS}:${PORT}`));
};