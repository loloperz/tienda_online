'use strict'

module.exports = function (sequelize, DataTypes) {
  const EmailError = sequelize.define('EmailError', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    emailId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    error: {
      type: DataTypes.TEXT,
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
    tableName: 'email_errors',
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
        name: 'email_errors_customerId_fk',
        using: 'BTREE',
        fields: [
          { name: 'customerId' }
        ]
      },
      {
        name: 'email_errors_emailId_fk',
        using: 'BTREE',
        fields: [
          { name: 'emailId' }
        ]
      }
    ]
  })

  EmailError.associate = function (models) {
    EmailError.belongsTo(models.Customer, { foreignKey: 'customerId' })
    EmailError.belongsTo(models.Email, { foreignKey: 'emailId' })
  }

  return EmailError
}
