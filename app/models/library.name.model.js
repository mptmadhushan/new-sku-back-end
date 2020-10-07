module.exports = (sequelize, DataTypes) => {
    const LibraryName = sequelize.define("library_name", {
      title: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      }
    });
  
    return LibraryName;
  };