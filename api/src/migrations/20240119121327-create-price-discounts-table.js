'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('price_discounts', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      priceId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'prices',
          key: 'id'
        }
      },
      percentage: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      multiplier: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      current: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      startsAt: {
        type: Sequelize.DATE
      },
      endsAt: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('price_discounts');
  }
};