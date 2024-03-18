const app = require('./app');
const logger = require('./common/config/logger');

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  logger.info(`Listening on port ${port}`);
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server Close');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM Received');

  if (server) {
    server.close();
  }
});
