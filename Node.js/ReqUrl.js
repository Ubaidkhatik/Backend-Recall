const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  const meth = req.method;
 if (meth === "GET" && url === "/") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
res.end(
           JSON.stringify({
        message: "This is Our Home Page",
      }),
    );
  }
 else if (meth === "GET" && url === "/about") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
res.end(
      JSON.stringify({
        message: "This is our About Page",
      }),
    );}

else if ((url === "/" || url === "/about") && meth !== "GET") {
    res.writeHead(405, {
      "Content-Type": "application/json",
    });
 res.end(
      JSON.stringify({
        message: "Method Not Allowed",
      }),
    ) }
else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });
res.end(
      JSON.stringify({
        message: "Not Found",
      }),
    )}
});
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
