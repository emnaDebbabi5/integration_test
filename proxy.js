const http = require('http');
const httpProxy = require('http-proxy');

// Create a new proxy instance
const proxy = httpProxy.createProxyServer({});

// Set up the proxy server
const server = http.createServer((req, res) => {
  // Log the request URL
  console.log('Request:', req.url);

  // Proxy the request to the external site
  proxy.web(req, res, {
    target: 'http://195.154.196.255:3000',
  });
});

// Log errors from the proxy server
proxy.on('error', (err, req, res) => {
  console.error('Proxy Error:', err);
  res.writeHead(500, {
    'Content-Type': 'text/plain',
  });
  res.end('Proxy Error');
});

// Listen for 'proxyRes' event
proxy.on('proxyRes', (proxyRes, req, res) => {
  // Handle the response from the external site
  console.log('Response status code:', proxyRes.statusCode);
  console.log('Response headers:', proxyRes.headers);
  console.log('Response req:', req.url);

  // You can perform additional actions here based on the response

  // For example, you can modify the response before sending it back to the client
  // Here, we're adding an additional header to the response
  proxyRes.headers['X-Custom-Header'] = 'Custom Value';
});

// Start the proxy server on port 8000
server.listen(8000, () => {
  console.log('Proxy server is listening on port 8000');
});
