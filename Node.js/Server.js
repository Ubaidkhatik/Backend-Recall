const http = require('http')
const server = http.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-Type' : 'application/json'

    })
    const data = {
        message : 'Hello Bro , This is Backend Recall',
        level :3
    }
    res.end(JSON.stringify(data))
}).listen(3000, ()=>{
    console.log("sServer running at http://localhost:3000")
})


