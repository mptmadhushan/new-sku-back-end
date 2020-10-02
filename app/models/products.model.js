module.exports = (sequelize, Sequelize) => {
  const Products = sequelize.define("product", {
    title: {
      type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.STRING,
    },
    sub_category: {
      type: Sequelize.STRING,
    },
    data: {
      type: Sequelize.BLOB("long"),
    },
  });

  return Products;
};
