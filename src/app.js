/** @format */

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { routes } = require('./routes/index');
const { setupProxies } = require('./utils/proxy');
const { rateLimiter } = require('./middlewares/rateLimiter');

// Application
const app = express();

// Configuration
require('dotenv').config();

// middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowHeaders: [
      'content-type',
      'Authorization',
      'Access-control-Allow-Credentials',
    ],
  })
);

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Event API Gateway');
});

setupProxies(app, routes);
rateLimiter(app, routes);

exports.app = app;
