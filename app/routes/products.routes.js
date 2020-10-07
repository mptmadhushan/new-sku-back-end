const express = require("express");
const router = express.Router();
// const homeController = require("../controllers/home");
const uploadController = require("../controller/products.controller");
const upload = require("../middleware/upload");

let routes = (app) => {
  //   router.get("/", homeController.getHome);

  router.post("/upload", upload.single("file"), uploadController.uploadFiles);
  router.get("/findAllCategory", uploadController.findAllCategory);
  router.get(
    "/findAllSubCategory/:category",
    uploadController.findAllSubCategory
  );
  router.get(
    "/findAllProductsBySub/:sub_category",
    uploadController.findAllProductsBySub
  );
  router.get("/findProductById/:id", uploadController.findOne);

  return app.use("/", router);
};

module.exports = routes;
