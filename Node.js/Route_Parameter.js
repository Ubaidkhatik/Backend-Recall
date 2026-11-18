
const http = require('http');

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'GET' && url.pathname.startsWith('/users/')) {
        const userId = url.pathname.split('/')[2];

        if (!userId) {
            res.writeHead(400);
            res.end(JSON.stringify({
                message: 'User ID is required'
            }));
            return;
        }

        res.writeHead(200);
        res.end(JSON.stringify({
            message: 'User details fetched successfully',
            userId: userId
        }));

    } else if (req.method === 'GET' && url.pathname.startsWith('/products/')) {
        const productId = url.pathname.split('/')[2];

        res.writeHead(200);
        res.end(JSON.stringify({
            message: 'Product details fetched successfully',
            productId: productId
        }));

    } else {
        res.writeHead(404);
        res.end(JSON.stringify({
            message: 'Route not found'
        }));
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
