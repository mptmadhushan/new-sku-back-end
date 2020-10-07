const { libraryNames } = require("../models");
const db = require("../models");
const LibraryName = db.libraryNames;
const LibraryItem = db.LibraryItems;

const createTutorial = (req, res) => {
  return LibraryName.create({
    title: req.body.title,
    description: req.body.description,
  })
    .then((libraryName) => {
      console.log(
        ">> Created tutorial: " + JSON.stringify(libraryName, null, 4)
      );
      return res.send(libraryName);
    })
    .catch((err) => {
      console.log(">> Error while creating libraryName: ", err);
    });
};

const createComment = (req, res) => {
  return LibraryItem.create({
    name: req.body.name,
    path: req.body.path,
    product_id: req.body.product_id,
    libraryNameId: req.body.libraryNameId,
  })
    .then((libraryItem) => {
      console.log(
        ">> Created comment: " + JSON.stringify(libraryItem, null, 4)
      );
      return res.send(libraryItem);
    })
    .catch((err) => {
      console.log(">> Error while creating comment: ", err);
    });
};

const findTutorialById = (req, res) => {
  const libraryNameId = req.params.libraryNameId;
  LibraryName.findByPk(libraryNameId, { include: ["library_names"] })
    .then((library) => {
      res.send(library);
    })
    .catch((err) => {
      console.log(">> Error while finding libraryName: ", err);
    });
};
// const findAll = (res) => {
//   LibraryName.findAll({
//     include: ["library_names"],
//   })
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
const findAll = (req, res) => {
  LibraryName.findAll({ include: ["library_names"], })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving product.",
      });
    });
};
module.exports = {
  findAll,
  findTutorialById,
  createTutorial,
  createComment,
};
