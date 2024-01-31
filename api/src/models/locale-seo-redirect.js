'use strict'

module.exports = function (sequelize, DataTypes) {
  const LocaleSeoRedirect = sequelize.define('LocaleSeoRedirect', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    localeSeoId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    languageAlias: {
      type: DataTypes.STRING,
      allowNull: false
    },
    group: {
      type: DataTypes.STRING
    },
    key: {
      type: DataTypes.STRING
    },
    subdomain: {
      type: DataTypes.STRING
    },
    oldUrl: {
      type: DataTypes.STRING
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    deletedAt: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    tableName: 'locale_seo_redirects',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id' }
        ]
      },
      {
        name: 'locale_seo_redirects_localeSeoId_fk',
        using: 'BTREE',
        fields: [
          { name: 'localeSeoId' }
        ]
      }
    ]
  })

  LocaleSeoRedirect.associate = function (models) {
    LocaleSeoRedirect.belongsTo(models.LocaleSeo, { foreignKey: 'localeSeoId' })
  }

  return LocaleSeoRedirect
}
