const http = require("http")
const server= http.createServer((req, res)=>{
    console.log("Method: ", req.method);
    console.log("URL: ", req.url);
    res.end("Request has been received")
}).listen(3000, ()=>{
    console.log("Server Running at http://localhost:3000")
})