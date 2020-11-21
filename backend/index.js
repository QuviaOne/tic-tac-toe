const http = require('http')
const server = http.createServer((req, res) => {
    req.on("data", data => {
        data = JSON.parse(data.toString());
        console.log(data);
        res.writeHead(200, { 'Content-Type': "application/json"})
        res.end(JSON.stringify({
            move: determineMove(data.state, data.fields)
        }))
        
    })
}).listen(6969);



function determineMove(state, fields) {

}