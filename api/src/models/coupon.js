module.exports = function (sequelize, DataTypes) {
  const Coupon = sequelize.define('Coupon', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    percentage: {
      type: DataTypes.DECIMAL
    },
    multiplier: {
      type: DataTypes.DECIMAL
    },
    current: {
      type: DataTypes.BOOLEAN
    },
    startsAt: {
      type: DataTypes.DATE
    },
    endsAt: {
      type: DataTypes.DATE
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
    tableName: 'coupons',
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
      }
    ]
  })

  Coupon.associate = function (models) {

  }

  return Coupon
}
