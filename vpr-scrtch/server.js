var	http = require("http"),
	handle_io = function(i, o){
		o.writeHead(200, {"Content-Type": "text/plain"});
		o.write("Hello World");
		o.end();
	};

http.createServer(handle_io).listen(1984);
console.log('fuckkkkk')
