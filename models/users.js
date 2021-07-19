'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Users.init({
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true
    },
    username: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    userType: DataTypes.NUMBER,
    createdAt: 'timestamp',
    updatedAt: 'timestamp',
    password: DataTypes.STRING,
    logins: DataTypes.NUMBER,
    active: DataTypes.NUMBER,
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};