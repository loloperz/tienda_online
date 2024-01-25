'use strict';

module.exports = function (sequelize, DataTypes) {
  const Ticket = sequelize.define('Ticket', {
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
    saleId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    returnId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reference: {
      type: DataTypes.STRING,
      allowNull: false
    },
    path: {
      type: DataTypes.STRING,
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
    tableName: 'tickets',
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
        name: 'tickets_customerId_fk',
        using: 'BTREE',
        fields: [
          { name: 'customerId' }
        ]
      },
      {
        name: 'tickets_saleId_fk',
        using: 'BTREE',
        fields: [
          { name: 'saleId' }
        ]
      },
      {
        name: 'tickets_returnId_fk',
        using: 'BTREE',
        fields: [
          { name: 'returnId' }
        ]
      }
    ]
  });

  Ticket.associate = function (models) {
    Ticket.belongsTo(models.Customer, { foreignKey: 'customerId' });
    Ticket.belongsTo(models.Sale, { foreignKey: 'saleId' });
    Ticket.belongsTo(models.Return, { foreignKey: 'returnId' });
  };

  return Ticket;
};