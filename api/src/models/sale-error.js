'use strict'

module.exports = function (sequelize, DataTypes) {
  const SaleError = sequelize.define('SaleError', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    paymentMethodId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    errorCode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    errorMessage: {
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
    tableName: 'sale_errors',
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
        name: 'sale_errors_paymentMethodId_fk',
        using: 'BTREE',
        fields: [
          { name: 'paymentMethodId' }
        ]
      },
      {
        name: 'sale_errors_customerId_fk',
        using: 'BTREE',
        fields: [
          { name: 'customerId' }
        ]
      },
      {
        name: 'sale_errors_cartId_fk',
        using: 'BTREE',
        fields: [
          { name: 'cartId' }
        ]
      }
    ]
  })

  SaleError.associate = function (models) {
    SaleError.belongsTo(models.PaymentMethod, { foreignKey: 'paymentMethodId' })
    SaleError.belongsTo(models.Customer, { foreignKey: 'customerId' })
    SaleError.belongsTo(models.Cart, { foreignKey: 'cartId' })
  }

  return SaleError
}
