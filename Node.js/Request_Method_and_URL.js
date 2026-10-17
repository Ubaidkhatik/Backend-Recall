const http = require("http")
const server= http.createServer((req, res)=>{
    const url = req.url;
    if(url=="/"){
        res.end("This is the Home page ")
    }
    else if(url =="/about"){
        res.end("This is the About page")
    }
    else if(url =="/contact"){
        res.end("This is the Contact Page")
    }
    else{
        res.statusCode=404
        res.end("404 Page Not Found")
    }
}).listen(3000, ()=>{
    console.log("Server running at http://localhost:3000")
})