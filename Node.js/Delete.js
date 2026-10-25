
const http = require("http");

let product = {
    id: 1,
    name: "Laptop",
    price: 45000
};

const server = http.createServer((req, res) => {
    if (req.method === "DELETE" && req.url === "/products/1") {
        if (product === null) {
            res.writeHead(404, {
                "Content-Type": "application/json",
            });

            res.end(
                JSON.stringify({
                    message: "Product Not Found",
                })
            );
        } else {
            product = null;

            res.writeHead(200, {
                "Content-Type": "application/json",
            });

            res.end(
                JSON.stringify({
                    message: "Product deleted successfully",
                })
            );
        }
    } else {
        res.writeHead(404, {
            "Content-Type": "application/json",
        });

        res.end(
            JSON.stringify({
                message: "Route Not Found",
            })
        );
    }
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

