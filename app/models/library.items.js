module.exports = (sequelize, DataTypes) => {
  const LibraryItem = sequelize.define("library_item", {
    name: {
      type: DataTypes.STRING,
    },
    product_id: {
      type: DataTypes.STRING,
    },
    path: {
      type: DataTypes.STRING,
    },
  });

  return LibraryItem;
};
