const http = require('http');
const fs = require('fs');
const path = require('path');

const routerServer = http.createServer((req, res) => {
    let filePath = './'; // Default path

    switch (req.url) {
        case '/':
            filePath += 'index.html';
            break;
        case '/about':
            filePath += 'about.html';
            break;
        case '/contact':
            filePath += 'contact.html';
            break;
        default:
            filePath += '404.html'; // Create a 404.html page for missing routes
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>404 Not Found</title>
                    <link rel="stylesheet" href="styles.css">
                </head>
                <body>
                    <h1>404 Not Found</h1>
                    <p>The page you are looking for does not exist.</p>
                </body>
                </html>
            `);
            return;
    }

    const extname = path.extname(filePath);
    let contentType = 'text/html';

    if (extname === '.css') contentType = 'text/css';
    else if (extname === '.js') contentType = 'text/javascript';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            res.writeHead(500);
            res.end(`Error: ${error.code}`);
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

routerServer.listen(8000, () => {
    console.log('Server running on http://localhost:8000');
});
