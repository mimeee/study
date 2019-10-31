var http = require("http"),
    url = require("url"),
    superagent = require("superagent"),
    cheerio = require("cheerio"),
    async = require("async"),
    eventproxy = require('eventproxy');



http.createServer(function(req, res){
	var t = '';
	superagent.get('http://www.pupudy.com/vodplay/7739-1-3.html').end( (err, pres) => {

		res.end(pres.text);
	})
	
}).listen(3000);

console.log('listen 3000');