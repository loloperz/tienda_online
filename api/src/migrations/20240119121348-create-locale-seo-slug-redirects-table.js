'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('locale_seo_slug_redirects', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      localeSeoSlugId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'locale_seo_slugs',
          key: 'id'
        }
      },
      languageAlias: {
        type: Sequelize.STRING,
        allowNull: false
      },
      oldUrl: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('locale_seo_slug_redirects');
  }
};