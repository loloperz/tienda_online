'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('api_trackings', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      customerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'customers',
          key: 'id'
        }
      },
      fingerprint: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ip: {
        type: Sequelize.STRING
      },
      isRobot: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      resource: {
        type: Sequelize.STRING,
        allowNull: false
      },
      resourceElement: {
        type: Sequelize.INTEGER
      },
      method: {
        type: Sequelize.STRING,
        allowNull: false
      },
      httpCode: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      message: {
        type: Sequelize.TEXT
      },
      startTime: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      endTime: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      latencyMS: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('api_trackings');
  }
};