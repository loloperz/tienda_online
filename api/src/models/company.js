module.exports = function (sequelize, DataTypes) {
  const Company = sequelize.define('Company', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    countryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Country',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'NO ACTION'
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'City',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'NO ACTION'
    },
    dialCodeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'DialCode',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'NO ACTION'
    },
    fiscalName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comercialName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vat: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comercialAddress: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fiscalAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postalCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    web: {
      type: DataTypes.STRING
    },
    telephone: {
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
    tableName: 'companies',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: 'companies_countryId_fk',
        fields: ['countryId']
      },
      {
        name: 'companies_cityId_fk',
        fields: ['cityId']
      },
      {
        name: 'companies_dialCodeId_fk',
        fields: ['dialCodeId']
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

  Company.associate = function (models) {
    Company.belongsTo(models.Country, { foreignKey: 'countryId', as: 'country' })
    Company.belongsTo(models.City, { foreignKey: 'cityId', as: 'city' })
    Company.belongsTo(models.DialCode, { foreignKey: 'dialCodeId', as: 'dialCode' })
  }

  return Company
}
