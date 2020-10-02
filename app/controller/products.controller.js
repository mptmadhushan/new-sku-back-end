const fs = require("fs");

const db = require("../models");
const Image = db.products;

const uploadFiles = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }

    Image.create({
      title: req.body.title,
      category: req.body.category,
      sub_category: req.body.sub_category,
      data: fs.readFileSync(__basedir + "/uploads/" + req.file.filename),
    }).then((image) => {
      fs.writeFileSync(__basedir + "/uploads/tmp/" + image.title, image.data);

      return res.send(`File has been uploaded.`);
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};
const findAllCategory = (req, res) => {
  const category = req.body.category;

  Image.findAll({ attributes: ["category"], group: ["category"] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
const findAllSubCategory = (req, res) => {
  const category = req.params.category;

  Image.findAll({ where: { category: category } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
const findAllProductsBySub = (req, res) => {
  const category = req.params.sub_category;

  Image.findAll({ where: { sub_category: category } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
module.exports = {
  uploadFiles,
  findAllCategory,
  findAllSubCategory,
  findAllProductsBySub,
};
