var express = require("express"),
	app = express(),
	http = require("http").Server(app),
	io = require("socket.io")(http),
	bodyParser = require('body-parser');

module.exports = function(PORT) {

	app.get("/", (req, res) => {
		res.sendFile(__dirname + "/dist/index.html")
	});

	app.use("/", express.static(__dirname + "/dist", {
		maxAge: 2592000
	}));

	app.use(bodyParser.json()); // for parsing application/json
	app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

	app.get("/server", (req, res) => {
		res.send('<h1>Proxy is Workin</h1>')
	});

	io.on("connection", (socket) => {
		console.log("Socket.io: A User Connected");
		socket.on('disconnect', () => {
			console.log('Socket.io: A User disconnected');
		});
	});

	app.post("/api/newmessage", (req, res) => {
		console.log('BODY: ', req.body);
		res.sendStatus(200);
	})

	http.listen(PORT, () => console.log(`Server Listening on Port: ${PORT}`));
};