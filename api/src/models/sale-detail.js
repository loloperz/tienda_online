'use strict';

module.exports = function (sequelize, DataTypes) {
  const SaleDetail = sequelize.define('SaleDetail', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    saleId: {
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
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false
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
    tableName: 'sale_details',
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
        name: 'sale_details_saleId_fk',
        using: 'BTREE',
        fields: [
          { name: 'saleId' }
        ]
      },
      {
        name: 'sale_details_productId_fk',
        using: 'BTREE',
        fields: [
          { name: 'productId' }
        ]
      },
      {
        name: 'sale_details_localeId_fk',
        using: 'BTREE',
        fields: [
          { name: 'localeId' }
        ]
      },
      {
        name: 'sale_details_priceId_fk',
        using: 'BTREE',
        fields: [
          { name: 'priceId' }
        ]
      },
      {
        name: 'sale_details_priceDiscountId_fk',
        using: 'BTREE',
        fields: [
          { name: 'priceDiscountId' }
        ]
      },
      {
        name: 'sale_details_taxId_fk',
        using: 'BTREE',
        fields: [
          { name: 'taxId' }
        ]
      }
    ]
  });

  SaleDetail.associate = function (models) {
    SaleDetail.belongsTo(models.Sale, { foreignKey: 'saleId' });
    SaleDetail.belongsTo(models.Product, { foreignKey: 'productId' });
    SaleDetail.belongsTo(models.Locale, { foreignKey: 'localeId' });
    SaleDetail.belongsTo(models.Price, { foreignKey: 'priceId' });
    SaleDetail.belongsTo(models.PriceDiscount, { foreignKey: 'priceDiscountId' });
    SaleDetail.belongsTo(models.Tax, { foreignKey: 'taxId' });
  };

  return SaleDetail;
};