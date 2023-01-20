const http = require("http");
const fs = require("fs");
const hostname = "localhost";
const port = 5000;
fs.writeFile('index.html', "<h1>Hello World!</h1> \n <p>This is VK Chauhan Goldy.....</p>", function(err){
    console.log(err);
})
const server = http.createServer((req, res) => {
    fs.readFile('index.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    })
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});