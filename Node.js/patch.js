
const http = require("http");

let product = {
    id: 1,
    name: "Laptop",
    price: 50000
};

const server = http.createServer((req, res) => {
    if (req.method === "PATCH" && req.url === "/products/1") {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            try {
                const updates = JSON.parse(body);

                Object.assign(product, updates);

                res.writeHead(200, {
                    "Content-Type": "application/json",
                });

                res.end(
                    JSON.stringify({
                        message: "Product updated successfully",
                        product: product,
                    })
                );
            } catch (err) {
                res.writeHead(400, {
                    "Content-Type": "application/json",
                });

                res.end(
                    JSON.stringify({
                        message: "Invalid JSON",
                    })
                );
            }
        });
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