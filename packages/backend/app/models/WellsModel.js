module.exports = (sequelize, DataTypes) => {
  const {INTEGER, TEXT, UUID} = DataTypes;
  const Wells = sequelize.define(
    'wells',
    {
      id: {
        type: UUID,
        primaryKey: true,
      },
      parent_id: {
        type: TEXT,
      },
      former_parent_id: {
        type: UUID,
      },
      status_id: {
        type: INTEGER,
      },
      name: {
        type: TEXT,
      },
      description: {
        type: TEXT,
      },
      elevation: {
        type: INTEGER,
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

  Wells.associate = function (models) {
    Wells.belongsTo(models.content_node_statuses, {
      foreignKey: 'status_id',
      as: 'content_node_statuses',
    });
    Wells.hasMany(models.wells, {
      foreignKey: 'parent_id',
      as: 'versions',
    });
    Wells.belongsTo(models.wells, {
      foreignKey: 'parent_id',
      as: 'parent',
    });
  };

  return Wells;
};
