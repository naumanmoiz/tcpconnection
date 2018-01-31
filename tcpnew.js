var net = require('net');

var client = new net.Socket();
client.connect(6801, '127.0.0.1', function() {
	console.log('Connected');
	
		client.write('Hello, server!! Love, Client.');
	

	
});


client.on('data', data);

function data (data) {
	console.log('Received: ' + data);
	//client.destroy(); // kill client after server's response
};
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(data);
}).listen(8080);

client.on('close', function() {
	console.log('Connection closed');
});