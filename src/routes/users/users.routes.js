const express = require('express');
const validateRequest = require('../../middleware/validation.middleware');
const { updateUserController } = require('../../controller/users/updateUser.controller');
const { getUserController } = require('../../controller/users/getUser.controller');
const { API_TYPE, REQ_PARAMETER } = require('../../common/constants/app-reference.constants');

const router = express.Router();

router.get(
  '/:userId/settings',
  validateRequest(API_TYPE.USERS.UPDATE, [REQ_PARAMETER.PARAMS]),
  getUserController,
);

router.put(
  '/:userId/settings',
  validateRequest(API_TYPE.USERS.UPDATE, [REQ_PARAMETER.PARAMS, REQ_PARAMETER.BODY]),
  updateUserController,
);

module.exports = router;
