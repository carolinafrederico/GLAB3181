const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  // Default Route - Homepage
  if (path === '/') {
    res.write('<h1 style="color: red">Hello World!</h1>');
    res.write('<p>I wonder what else we can send...</p>');
  }

  // About Route
  else if (path === '/about') {
    res.write('<h1>About This Server</h1>');
    res.write('<p>This is a tiny Node.js server that responds to different routes!</p>');
    res.write('<p>Try visiting <a href="/greet?name=YourName">/greet?name=YourName</a> for something fun.</p>');
  }

  // Greet Route
  else if (path === '/greet') {
    const name = query.name || 'stranger';
    res.write(`<h1>Hello, ${name}!</h1>`);
    res.write('<p>Nice to see you visiting our server.</p>');
  }

  // 404 Fallback
  else {
    res.statusCode = 404;
    res.write('<h1>404 - Page Not Found</h1>');
    res.write('<p>Try going back to the <a href="/">home page</a>.</p>');
  }

  res.end();
});

// Server listener
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
