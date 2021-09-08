module.exports = (sequelize, DataTypes) => {
  const {INTEGER, TEXT} = DataTypes;
  const ContentNodeStatuses = sequelize.define(
    'content_node_statuses',
    {
      id: {
        type: INTEGER,
        primaryKey: true,
      },
      name: {
        type: TEXT,
      },
    },
    {
      schema: 'core',
      timestamps: false,
    }
  );

  ContentNodeStatuses.associate = function (models) {
    ContentNodeStatuses.hasMany(models.contacts, {
      foreignKey: 'id',
      timestamps: false,
      as: 'contacts',
    });
  };

  return ContentNodeStatuses;
};
