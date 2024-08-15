/** @format */

const routes = [
  {
    url: '/auth',
    auth: false,
    creditCheck: false,
    rateLimit: {
      windowMs: 60 * 60 * 1000,
      max: 100,
    },
    proxy: {
      target: 'http://localhost:4000/api/v1/auth',
      changeOrigin: true,
      pathRewrite: {
        [`^/auth`]: '',
      },
    },
  },
];

exports.routes = routes;
