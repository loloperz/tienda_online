module.exports = function (sequelize, DataTypes) {
  const ProductCategoryRelation = sequelize.define('ProductCategoryRelation', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productCategoryId: {
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
    tableName: 'product_category_relations',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: 'product_category_relations_productId_fk',
        fields: ['productId']
      },
      {
        name: 'product_category_relations_productCategoryId_fk',
        fields: ['productCategoryId']
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
  });

  ProductCategoryRelation.associate = function (models) {

  };

  return ProductCategoryRelation;
};
