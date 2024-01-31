module.exports = function (sequelize, DataTypes) {
  const PageTracking = sequelize.define('PageTracking', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    customerId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Customer',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'NO ACTION'
    },
    fingerprintId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Fingerprint',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'NO ACTION'
    },
    localeSeoId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'LocaleSeo',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'NO ACTION'
    },
    localeSeoSlugId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'LocaleSeoSlug',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'NO ACTION'
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isRobot: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    startTime: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    endTime: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    latencyMS: {
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
    tableName: 'page_trackings',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: 'page_trackings_customerId_fk',
        fields: ['customerId']
      },
      {
        name: 'page_trackings_fingerprintId_fk',
        fields: ['fingerprintId']
      },
      {
        name: 'page_trackings_localeSeoId_fk',
        fields: ['localeSeoId']
      },
      {
        name: 'page_trackings_localeSeoSlugId_fk',
        fields: ['localeSeoSlugId']
      },
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id' }
        ]
      }
    ]
  })

  PageTracking.associate = function (models) {
    PageTracking.belongsTo(models.Customer, { foreignKey: 'customerId', as: 'customer' })
    PageTracking.belongsTo(models.Fingerprint, { foreignKey: 'fingerprintId', as: 'fingerprint' })
    PageTracking.belongsTo(models.LocaleSeo, { foreignKey: 'localeSeoId', as: 'localeSeo' })
    PageTracking.belongsTo(models.LocaleSeoSlug, { foreignKey: 'localeSeoSlugId', as: 'localeSeoSlug' })
  }

  return PageTracking
}
