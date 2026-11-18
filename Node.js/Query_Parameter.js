const http = require("http");

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === "GET" && url.pathname === "/products") {
    const category = url.searchParams.get("category");
    const price = url.searchParams.get("price");

    res.setHeader("Content-Type", "application/json");

    if (!category || !price) {
      res.writeHead(400);
      res.end(
        JSON.stringify({
          message: "Both Category and price query parameters are required",
        }),
      );
      return;
    }

    res.writeHead(200);
    res.end(
      JSON.stringify({
        category: category,
        price: price,
      }),
    );
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: "Route not found",
      }),
    );
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
