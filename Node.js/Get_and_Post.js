const http = require('http')
const server = http.createServer((req, res)=>{
    const method= req.method;
    if(method==="GET"){
        res.end("Get Request recieved")
    }
    else if (method === "POST"){
        res.end("Post Request received")
    }
    else{
        res.statusCode=405
        res.end("Page not found")
    }

}).listen(3000, ()=>{
    console.log("Server running at http://localhost:3000")
})