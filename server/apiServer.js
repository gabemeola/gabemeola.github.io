var express = require("express"),
		http = require("http").Server(app),
		io = require("socket.io")(http);

module.exports = (PORT) => {
	const app = express();

	app.get("/", (req, res) => {
		res.sendFile(__dirname + "/index.html")
	});

	app.get("/server", (req, res) => {
		res.send('<h1>Proxy is Working</h1>')
	});



	http.listen(PORT, () => console.log(`Server Listening on Port: ${PORT}`));
};