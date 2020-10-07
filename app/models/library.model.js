module.exports = (sequelize, Sequelize) => {
  const Library = sequelize.define("library", {
    library_title: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.STRING,
    },
    sub_category: {
      type: Sequelize.STRING,
    },
    path: {
      type: Sequelize.STRING,
    },
  });

  return Library;
};
