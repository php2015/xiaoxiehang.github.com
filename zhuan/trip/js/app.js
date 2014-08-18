//导入http模块
var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Node');
    res.end('yujia');
}).listen(8080);

console.log('success');