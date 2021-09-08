module.exports = (sequelize, DataTypes) => {
  const {INTEGER, TEXT, UUID} = DataTypes;
  const Contacts = sequelize.define(
    'contacts',
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
      firstname: {
        type: TEXT,
      },
      lastname: {
        type: TEXT,
      },
      email: {
        type: TEXT,
      },
      phone: {
        type: TEXT,
      },
      address: {
        type: TEXT,
      },
      notes: {
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

  Contacts.associate = function (models) {
    Contacts.belongsTo(models.content_node_statuses, {
      foreignKey: 'status_id',
      as: 'content_node_statuses',
    });
    Contacts.hasMany(models.contacts, {
      foreignKey: 'parent_id',
      as: 'versions',
    });
    Contacts.belongsTo(models.contacts, {
      foreignKey: 'parent_id',
      as: 'parent',
    });
  };

  return Contacts;
};
