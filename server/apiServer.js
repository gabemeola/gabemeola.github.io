var app = require("express")(),
		http = require("http").Server(app),
		io = require("socket.io")(http);

module.exports = (PORT) => {

	app.get("/", (req, res) => {
		res.sendFile(__dirname + "/index.html")
	});

	app.get("/server", (req, res) => {
		res.send('<h1>Proxy is Working</h1>')
	});

	io.on("connection", (socket) => {
		console.log("Socket.io: A User Connected");
	});

	http.listen(PORT, () => console.log(`Server Listening on Port: ${PORT}`));
};