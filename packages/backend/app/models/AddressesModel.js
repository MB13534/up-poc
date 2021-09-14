module.exports = (sequelize, DataTypes) => {
  const {INTEGER, TEXT, UUID} = DataTypes;
  const Addresses = sequelize.define(
    'addresses',
    {
      id: {
        type: UUID,
        primaryKey: true,
      },
      parent_id: {
        type: UUID,
      },
      former_parent_id: {
        type: UUID,
      },
      status_id: {
        type: INTEGER,
      },
      address1: {
        type: TEXT,
      },
      address2: {
        type: TEXT,
      },
      city: {
        type: TEXT,
      },
      state: {
        type: TEXT,
      },
      zip: {
        type: TEXT,
      },
      created_by: {
        type: UUID,
      },
      updated_by: {
        type: UUID,
      },
      deleted_by: {
        type: UUID,
      },
    },

    {
      defaultScope: {
        order: [['created_at', 'asc']],
      },
      schema: 'app',
      paranoid: true,
    }
  );

  Addresses.associate = function (models) {
    Addresses.belongsTo(models.content_node_statuses, {
      foreignKey: 'status_id',
      as: 'content_node_statuses',
    });
    Addresses.hasMany(models.addresses, {
      foreignKey: 'parent_id',
      as: 'versions',
    });
    Addresses.belongsTo(models.addresses, {
      foreignKey: 'parent_id',
      as: 'parent',
    });
  };

  return Addresses;
};
