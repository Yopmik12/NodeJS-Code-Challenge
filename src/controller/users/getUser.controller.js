const httpStatus = require('http-status');
const logger = require('../../common/config/logger');
const { getUserSettings } = require('../../service/users.service');

const getUserController = async (req, res) => {
  try {
    const userId = req.params.userId;
    let code = httpStatus.OK;

    let response = await getUserSettings(userId);

    if (!response) {
      response = { message: 'No User Found' };
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
  getUserController,
};
