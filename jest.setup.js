const { execSync } = require('child_process');
const { Sequelize } = require('sequelize');
const env = 'test';
const config = require('./src/database/config.json')[env];

const sequelize = new Sequelize({
  ...config,
  logging: false,
});

beforeAll(async () => {
  await sequelize.sync({ force: true });
  execSync('npx sequelize-cli db:migrate');
  execSync('npx sequelize-cli db:seed:all');
});

afterAll(async () => {
  await sequelize.close();
});

module.exports = sequelize;
