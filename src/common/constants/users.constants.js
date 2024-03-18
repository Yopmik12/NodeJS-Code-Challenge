const THEMES = Object.freeze({
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
});
const RESULT_PER_PAGE = Object.freeze({
  MIN: 20,
  MAX: 100,
});

const USER_SETTINGS = Object.freeze({
  PREFERRED_THEME: THEMES.SYSTEM, // Default theme is 'system'
  RESULTS_PER_PAGE: RESULT_PER_PAGE.MIN, // Default results per page is 20
  SEND_EMAIL: true, // Default is to send email
});

module.exports = {
  USER_SETTINGS,
  RESULT_PER_PAGE,
  THEMES,
};
