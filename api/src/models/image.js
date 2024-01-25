'use strict';

module.exports = function (sequelize, DataTypes) {
  const Image = sequelize.define('Image', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    imageConfigurationId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    entityId: {
      type: DataTypes.INTEGER
    },
    entity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING
    },
    originalFilename: {
      type: DataTypes.STRING
    },
    resizedFilename: {
      type: DataTypes.STRING
    },
    title: {
      type: DataTypes.STRING
    },
    alt: {
      type: DataTypes.STRING
    },
    languageAlias: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mediaQuery: {
      type: DataTypes.STRING,
      allowNull: false
    },
    latencyMs: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    tableName: 'images',
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
        name: 'images_imageConfigurationId_fk',
        using: 'BTREE',
        fields: [
          { name: 'imageConfigurationId' }
        ]
      },
      {
        name: 'images_entityId_entity_mediaQuery_index',
        using: 'BTREE',
        fields: [
          { name: 'entityId' },
          { name: 'entity' },
          { name: 'mediaQuery' }
        ]
      }
    ]
  });

  Image.associate = function (models) {
    Image.belongsTo(models.ImageConfiguration, { foreignKey: 'imageConfigurationId' });
  };

  return Image;
};