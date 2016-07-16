var express = require("express");

module.exports = (PORT) => {
	const app = express();
	app.listen(PORT);
};