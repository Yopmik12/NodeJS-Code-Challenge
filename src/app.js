const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const routes = require('./routes');
const swaggerDefRouter = require('./docs/swaggerDef');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmet());

app.use(compression());

app.use(cors());
app.options('*', cors());

app.use('/', swaggerDefRouter);

app.use(routes);

module.exports = app;
