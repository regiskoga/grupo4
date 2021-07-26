'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subscribers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Subscribers.init({
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true
    },
    eventId: DataTypes.NUMBER,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    active: DataTypes.NUMBER,
    createdAt: 'timestamp',
    updatedAt: 'timestamp'
  }, {
    sequelize,
    modelName: 'Subscribers',
  });
  return Subscribers;
};