var express = require("express"),
		app = express(),
		http = require("http").Server(app),
		io = require("socket.io")(http);

module.exports = function(PORT) {

	app.get("/", (req, res) => {
		res.sendFile(__dirname + "/dist/index.html")
	});

	app.use("/", express.static(__dirname + "/dist", {
		maxAge: 2592000
	}));

	app.get("/server", (req, res) => {
		res.send('<h1>Proxy is Working</h1>')
	});

	io.on("connection", (socket) => {
		console.log("Socket.io: A User Connected");
		socket.on('disconnect', () => {
			console.log('Socket.io: A User disconnected');
		});
	});

	http.listen(PORT, () => console.log(`Server Listening on Port: ${PORT}`));
};