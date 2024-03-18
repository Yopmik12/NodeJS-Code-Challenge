const httpStatus = require('http-status');
const logger = require('../../common/config/logger');
const { updateUserSettings } = require('../../service/users.service');

const updateUserController = async (req, res) => {
  try {
    const reqBody = req.body;
    const userId = req.params.userId;
    let code = httpStatus.OK;

    const response = await updateUserSettings(reqBody, userId);

    if (response.message) {
      code = httpStatus.BAD_REQUEST;
    }

    res.status(code).send({
      code,
      response,
    });
  } catch (err) {
    logger.error(err);

    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      code: httpStatus.INTERNAL_SERVER_ERROR,
      response: 'Internal Server Error',
    });
  }
};

module.exports = {
  updateUserController,
};
