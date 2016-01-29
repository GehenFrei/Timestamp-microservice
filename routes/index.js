'use strict';

var path = process.cwd();
var TimeHandler = require(path + '/controllers/timeHandler.server.js' )
var url = require("url");

module.exports = function (app) {

	var timeHandler = new TimeHandler();
	
	app.route("/:time").get(function(req, res) {
		var reqObj =url.parse(req.url, true);
		var path = reqObj.pathname.substring(1, reqObj.pathname.length );
		var type = timeHandler.checkFormat(path);
		res.json(timeHandler.parseInput(path, type));
	});

	app.route('/')
		.get( function (req, res) {
			res.sendFile(path + '/public/index.html');
		});
};
