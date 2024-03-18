const Joi = require('joi');
const { THEMES, RESULT_PER_PAGE } = require('../common/constants/users.constants.js');

const updateUserSettingsSchema = Joi.object().keys({
  preferredTheme: Joi.string()
    .valid(...Object.values(THEMES))
    .optional(),
  resultsPerPage: Joi.number().min(RESULT_PER_PAGE.MIN).max(RESULT_PER_PAGE.MAX).optional(),
  sendEmail: Joi.boolean().optional(),
});

const updateUserSettingsValidation = Joi.object({
  userId: Joi.number().required(),
});

const updateUserSettingsCombinedSchema = Joi.object({
  params: updateUserSettingsValidation,
  body: updateUserSettingsSchema,
});

module.exports = {
  updateUserSettingsCombinedSchema,
  updateUserSettingsValidation,
};
