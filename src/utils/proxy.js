/** @format */

// proxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');
const { authenticate } = require('../middlewares/auth');

const setupProxies = (app, routes) => {
  routes.forEach((r) => {
    if (r.auth) {
      app.use(r.url, authenticate, createProxyMiddleware(r.proxy));
    } else {
      app.use(r.url, createProxyMiddleware(r.proxy));
    }
  });
};

exports.setupProxies = setupProxies;
