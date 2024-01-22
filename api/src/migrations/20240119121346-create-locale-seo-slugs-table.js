'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('locale_seo_slugs', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      localeSeoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'locale_seos',
          key: 'id'
        }
      },
      parentSlugId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'locale_seo_slugs',
          key: 'id'
        }
      },
      languageAlias: {
        type: Sequelize.STRING,
        allowNull: false
      },
      relParent: {
        type: Sequelize.STRING
      },
      slug: {
        type: Sequelize.STRING,
        allowNull: false
      },
      key: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING
      },
      redirection: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
    await queryInterface.dropTable('locale_seo_slugs');
  }
};