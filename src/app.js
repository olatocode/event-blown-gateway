const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { routes } = require("./routes/index");
const { setupProxies } = require('./utils/proxy');
const { rateLimiter } = require('./middlewares/rateLimiter')


// Application
const app = express();



// Configuration
require("dotenv").config();

// middleware
app.use(cors());
app.use(morgan("dev"));
// app.use(rateLimiter);

setupProxies(app, routes);
rateLimiter(app, routes);

exports.app = app;
