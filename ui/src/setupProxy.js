const createProxyMiddleware = require('http-proxy-middleware');

const API_PORT = 3001;

module.exports = function (app) {
  app.use(
    '/api/',
    createProxyMiddleware({
      target: 'http://localhost:' + API_PORT,
      //changeOrigin: true,
      logLevel: 'debug'
    })
  );
};
