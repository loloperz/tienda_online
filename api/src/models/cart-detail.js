'use strict';

module.exports = function (sequelize, DataTypes) {
  const CartDetail = sequelize.define('CartDetail', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    localeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    priceId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    priceDiscountId: {
      type: DataTypes.INTEGER
    },
    taxId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    basePrice: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false
    },
    taxPrice: {
      type: DataTypes.DECIMAL(6, 2)
    },
    quantity: {
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
    tableName: 'cart_details',
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
        name: 'cart_details_cartId_fk',
        using: 'BTREE',
        fields: [
          { name: 'cartId' }
        ]
      },
      {
        name: 'cart_details_productId_fk',
        using: 'BTREE',
        fields: [
          { name: 'productId' }
        ]
      },
      {
        name: 'cart_details_localeId_fk',
        using: 'BTREE',
        fields: [
          { name: 'localeId' }
        ]
      },
      {
        name: 'cart_details_priceId_fk',
        using: 'BTREE',
        fields: [
          { name: 'priceId' }
        ]
      },
      {
        name: 'cart_details_taxId_fk',
        using: 'BTREE',
        fields: [
          { name: 'taxId' }
        ]
      }
    ]
  });

  CartDetail.associate = function (models) {
    CartDetail.belongsTo(models.Cart, { foreignKey: 'cartId' });
    CartDetail.belongsTo(models.Product, { foreignKey: 'productId' });
    CartDetail.belongsTo(models.Locale, { foreignKey: 'localeId' });
    CartDetail.belongsTo(models.Price, { foreignKey: 'priceId' });
    CartDetail.belongsTo(models.PriceDiscount, { foreignKey: 'priceDiscountId' });
    CartDetail.belongsTo(models.Tax, { foreignKey: 'taxId' });
  };

  return CartDetail;
};