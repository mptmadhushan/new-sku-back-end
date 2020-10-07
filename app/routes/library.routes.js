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

  return app.use("/library", router);
};

module.exports = routes;
