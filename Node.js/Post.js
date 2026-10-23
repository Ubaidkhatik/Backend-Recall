
const http = require("http");

const server = http.createServer((req, res) => {
    if (req.method === "POST" && req.url === "/products") {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            try {
                const product = JSON.parse(body);

                res.writeHead(201, {
                    "Content-Type": "application/json",
                });

                res.end(
                    JSON.stringify({
                        message: "Product received successfully",
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
                method: req.method,
                url: req.url,
            })
        );
    }
});


server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
