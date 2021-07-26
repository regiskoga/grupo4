'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Events.init({
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true
    },
    idUser: DataTypes.NUMBER,
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    idVimeo: DataTypes.STRING,
    iframe: DataTypes.STRING,
    eventTerm: 'timestamp',
    eventPeriod: DataTypes.NUMBER,
    headerColor: DataTypes.STRING,
    footerColor: DataTypes.STRING,
    fontColor: DataTypes.STRING,
    backgroundColor: DataTypes.STRING,
    logoPath: DataTypes.STRING,
    loginImagePath: DataTypes.STRING,
    activeChat: DataTypes.NUMBER,
    activePoll: DataTypes.NUMBER,
    privateWebinar: DataTypes.NUMBER,
    activeForm: DataTypes.NUMBER,
    activeEvent: DataTypes.NUMBER,
    createdAt: 'timestamp',
    updatedAt: 'timestamp',
    accessCount: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Events',
  });
  return Events;
};