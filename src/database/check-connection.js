const { Sequelize } = require('sequelize');
const logger = require('../common/config/logger');
const env = process.env.NODE_ENV || 'development';
const config = require('../database/config.json')[env];

async function checkDatabaseConnection() {
  const sequelize = new Sequelize(config);

  try {
    await sequelize.authenticate();
    logger.info('Connection to the database has been established successfully');
  } catch (error) {
    logger.error('Unable to connect to the database:', error);
    throw error;
  } finally {
    await sequelize.close();
  }
}

checkDatabaseConnection();
