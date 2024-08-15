/** @format */

const rateLimit = require('express-rate-limit');

const rateLimiter = (app, routes) => {
  routes.forEach((r) => {
    if (r.rateLimit) {
      app.use(r.url, rateLimit(r.rateLimit));
    }
  });
};

exports.rateLimiter = rateLimiter;
