'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.NUMBER
      },
      idUser: {
        type: Sequelize.NUMBER
      },
      title: {
        type: Sequelize.STRING
      },
      subtitle: {
        type: Sequelize.STRING
      },
      idVimeo: {
        type: Sequelize.STRING
      },
      iframe: {
        type: Sequelize.STRING
      },
      eventTerm: {
        type: Sequelize.DATE
      },
      eventPeriod: {
        type: Sequelize.NUMBER
      },
      headerColor: {
        type: Sequelize.STRING
      },
      footerColor: {
        type: Sequelize.STRING
      },
      fontColor: {
        type: Sequelize.STRING
      },
      backgroundColor: {
        type: Sequelize.STRING
      },
      logoPath: {
        type: Sequelize.STRING
      },
      loginImagePath: {
        type: Sequelize.STRING
      },
      activeChat: {
        type: Sequelize.NUMBER
      },
      activeForm: {
        type: Sequelize.NUMBER
      },
      activeEvent: {
        type: Sequelize.NUMBER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Events');
  }
};