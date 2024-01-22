
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('images', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      entity: {
        type: Sequelize.STRING,
        allowNull: false
      },
      entityId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      imageConfigurationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'image_configurations',
          key: 'id'
        }
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      originalFilename: {
        type: Sequelize.STRING,
        allowNull: false
      },
      resizedFilename: {
        type: Sequelize.STRING,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      alt: {
        type: Sequelize.STRING,
        allowNull: false
      },
      languageAlias: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mediaQuery: {
        type: Sequelize.STRING,
        allowNull: false
      },
      latencyMS: {
        type: Sequelize.INTEGER,
        allowNull: false
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
    await queryInterface.dropTable('images');
  }
};