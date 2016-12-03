const express = require("express"),
	    app = express(),
	    http = require("http").Server(app),
	    io = require("socket.io")(http),
	    bodyParser = require('body-parser'),
	    path = require('path');

module.exports = function(PORT) {

	// Middleware
	app.use(bodyParser.json()); // for parsing application/json
	app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
	app.use(express.static(path.resolve(__dirname, 'dist'), {
		maxAge: 5184000000
	}));

	// Routes
	app.get("/server", (req, res) => {
		res.send('<h1>Proxy is Working</h1>')
	});

	app.get("*", function(req, res) {
		res.sendFile(__dirname + "/dist/index.html")
		}
	);

	io.on("connection", (socket) => {
		console.log("Socket.io: A User Connected");
		socket.on('disconnect', () => {
			console.log('Socket.io: A User disconnected');
		});
	});

	app.post("/api/newmessage", (req, res) => {
		const smoochId = req.body.appUser._id;
		console.log('BODY: ', req.body);
		io.emit(smoochId, {text: req.body.messages[0].text});
		res.sendStatus(200);
	});

	http.listen(PORT,() => console.log(`Api Server Listening on Port: ${PORT}`));
};