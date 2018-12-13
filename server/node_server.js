const http = require("http")

let server = http.createServer(function(req,res){
	// 服务器端加一个头Access-Control-Allow-Origin
	console.log(req.headers)
	// ajax2在req.headers对象中多了一个origin属性，可以判断访问网站的来源
	res.setHeader("Access-Control-Allow-Origin",'*')
	res.write("aaaa");
	res.end();
}).listen(8088);