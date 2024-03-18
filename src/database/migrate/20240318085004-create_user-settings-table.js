const { THEMES, USER_SETTINGS } = require('../../common/constants/users.constants');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_settings', {
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      preferredTheme: {
        type: Sequelize.ENUM(...Object.values(THEMES)),
        defaultValue: USER_SETTINGS.PREFERRED_THEME,
        allowNull: false,
      },
      resultsPerPage: {
        type: Sequelize.INTEGER,
        defaultValue: USER_SETTINGS.RESULTS_PER_PAGE,
        allowNull: false,
      },
      sendEmail: {
        type: Sequelize.BOOLEAN,
        defaultValue: USER_SETTINGS.SEND_EMAIL,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('user_settings');
  },
};
