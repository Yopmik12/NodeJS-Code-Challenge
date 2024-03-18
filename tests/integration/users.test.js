const httpStatus = require('http-status');
const request = require('supertest');
const app = require('../../src/app');
const { THEMES } = require('../../src/common/constants/users.constants');
describe('User API', () => {
  describe('Test Suites for GET user', () => {
    test('should return user settings for valid user ID', async () => {
      const userId = 1;
      const { body } = await request(app).get(`/user/${userId}/settings`);
      const { response } = body;

      expect(body.code).toBe(httpStatus.OK);
      expect(response).toHaveProperty('preferredTheme');
      expect(response).toHaveProperty('resultsPerPage');
      expect(response).toHaveProperty('sendEmail');
    });

    test('should return bad request for invalid user ID', async () => {
      const userId = -1;
      const { body } = await request(app).get(`/user/${userId}/settings`);

      expect(body.code).toBe(httpStatus.BAD_REQUEST);
      expect(body.response.message).toBe('No User Found');
    });
  });

  describe('Test Suites for Update user settings', () => {
    test('should update user settings', async () => {
      const userId = 1;
      const updateData = {
        preferredTheme: THEMES.DARK,
        resultsPerPage: 100,
        sendEmail: false,
      };

      const { body } = await request(app).put(`/user/${userId}/settings`).send(updateData);
      const { response } = body;

      expect(body.code).toBe(httpStatus.OK);
      expect(response.userId).toBe(userId);
      expect(response.preferredTheme).toBe(updateData.preferredTheme);
      expect(response.resultsPerPage).toBe(updateData.resultsPerPage);
      expect(response.sendEmail).toBe(updateData.sendEmail);
    });

    test('should return bad request for invalid user ID', async () => {
      const userId = -1;
      const { body } = await request(app).get(`/user/${userId}/settings`);

      expect(body.code).toBe(httpStatus.BAD_REQUEST);
      expect(body.response.message).toBe('No User Found');
    });
  });
});
