var express = require("express");

module.exports = (PORT) => {
	const app = express();

	app.get("/", (req, res) => {
		res.sendFile(__dirname + "/index.html")
	});

	app.get("/server", (req, res) => {
		res.send('<h1>Proxy is Working</h1>')
	});

	app.listen(PORT, () => console.log(`Server Listening on Port: ${PORT}`));
};