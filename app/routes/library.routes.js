const express = require("express");
const router = express.Router();
// const homeController = require("../controllers/home");
const library = require("../controller/library.controller");

let routes = (app) => {
  //   router.get("/", homeController.getHome);

  router.post("/addLibrary", library.createTutorial);
  router.post("/addLibraryItem", library.createComment);
  router.get("/findAllItemsByLibrary/:libraryNameId", library.findTutorialById);
  router.get("/findAllLibrary", library.findAll);
  // router.get(
  //   "/findAllSubCategory/:category",
  //   uploadController.findAllSubCategory
  // );
  // router.get(
  //   "/findAllProductsBySub/:sub_category",
  //   uploadController.findAllProductsBySub
  // );
  // router.get("/findProductById/:id", uploadController.findOne);

  return app.use("/library", router);
};

module.exports = routes;
