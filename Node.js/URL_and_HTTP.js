
const http = require('http')
const server = http.createServer((req, res)=>{
    const method = req.method;
    const url = req.url
   if (method === "GET" && url === "/") {
    res.end("Home Page");
}
else if (method === "GET" && url === "/about"){
    res.end("About page")
}
else if(method ==="POST" && url ==="/users"){
    res.statusCode= 201
    res.end("User Created")
}
else{
    res.statusCode=404;
    res.end("Page not Found")
}
}).listen(4000, ()=>{
    console.log("server Running at http://localhost:4000")
})