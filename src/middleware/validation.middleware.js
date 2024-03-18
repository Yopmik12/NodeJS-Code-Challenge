const httpStatus = require('http-status');
const usersValidation = require('../validation/users.validation');
const { API_TYPE, REQ_PARAMETER } = require('../common/constants/app-reference.constants');

const schemaValidationByType = (apiType) => {
  switch (apiType) {
    case API_TYPE.USERS.UPDATE:
      return usersValidation.updateUserSettingsCombinedSchema;
  }
};

const validateRequestParameter = (apiType, data) => {
  const { error } = schemaValidationByType(apiType).validate(data, { allowUnknown: false });

  if (error) {
    throw new Error(error.message);
  }
};

const getReqParameters = (reqParameters, req) => {
  const requestData = {};

  for (const part of reqParameters) {
    if (part === REQ_PARAMETER.PARAMS) {
      requestData.params = req.params;
    } else if (part === REQ_PARAMETER.BODY) {
      requestData.body = req.body;
    }
  }

  return requestData;
};

const validateRequest = (apiType, reqParameters) => (req, res, next) => {
  try {
    const requestData = getReqParameters(reqParameters, req);

    validateRequestParameter(apiType, requestData);

    next();
  } catch (err) {
    res.status(httpStatus.BAD_REQUEST).json({
      code: httpStatus.BAD_REQUEST,
      response: err.message,
    });
  }
};

module.exports = validateRequest;
