const { UserSettings } = require('../models');
const logger = require('../common/config/logger');

const getUserSettings = async (userId) => {
  try {
    return UserSettings.findOne({
      where: {
        userId,
      },
    });
  } catch (err) {
    logger.error(err);
    throw new Error('Cannot Get Specific User');
  }
};

const updateUserSettings = async (data, userId) => {
  try {
    const user = await getUserSettings(userId);

    if (!user) {
      return { message: 'No User Found!' };
    }

    const updateUser = await user.update(data);

    return updateUser;
  } catch (err) {
    logger.error(err);
    throw new Error('Cannot Update User');
  }
};

module.exports = {
  updateUserSettings,
  getUserSettings,
};
