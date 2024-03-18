const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserSettings extends Model {}
  UserSettings.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      preferredTheme: DataTypes.STRING,
      resultsPerPage: DataTypes.INTEGER,
      sendEmail: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'UserSettings',
      tableName: 'user_settings',
      timestamps: false,
    },
  );
  return UserSettings;
};
