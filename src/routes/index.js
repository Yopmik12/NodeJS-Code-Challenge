const express = require('express');
const userRoutes = require('./users/users.routes');
const pingRoutes = require('./ping/ping.routes');
const { API_ENDPOINTS } = require('../common/constants/app-reference.constants');

const router = express.Router();

const defaultRoutes = [
  {
    path: API_ENDPOINTS.USERS,
    routes: userRoutes,
  },
  {
    path: API_ENDPOINTS.PING,
    routes: pingRoutes,
  },
];

defaultRoutes.forEach((route) => router.use(route.path, route.routes));

module.exports = router;
