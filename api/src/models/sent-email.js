'use strict';

module.exports = function (sequelize, DataTypes) {
  const SentEmail = sequelize.define('SentEmail', {
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
    tableName: 'sent_emails',
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
        name: 'sent_emails_customerId_fk',
        using: 'BTREE',
        fields: [
          { name: 'customerId' }
        ]
      },
      {
        name: 'sent_emails_emailId_fk',
        using: 'BTREE',
        fields: [
          { name: 'emailId' }
        ]
      }
    ]
  });

  SentEmail.associate = function (models) {
    SentEmail.belongsTo(models.Customer, { foreignKey: 'customerId' });
    SentEmail.belongsTo(models.Email, { foreignKey: 'emailId' });
  };

  return SentEmail;
};