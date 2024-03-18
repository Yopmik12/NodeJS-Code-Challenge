const { USER_SETTINGS, THEMES } = require('../../common/constants/users.constants');

module.exports = {
  async up(queryInterface) {
    const data = [
      {
        preferredTheme: USER_SETTINGS.PREFERRED_THEME,
        resultsPerPage: USER_SETTINGS.RESULTS_PER_PAGE,
        sendEmail: USER_SETTINGS.SEND_EMAIL,
      },
      {
        preferredTheme: THEMES.DARK,
        resultsPerPage: 50,
        sendEmail: true,
      },
      {
        preferredTheme: THEMES.LIGHT,
        resultsPerPage: 30,
        sendEmail: false,
      },
    ];

    await queryInterface.bulkInsert('user_settings', data, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('user_settings', null, {});
  },
};
