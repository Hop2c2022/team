const express = require("express");
const {
  urlPostController,
  urlGetController,
  urlDeleteController,
  urlGetControllerById,
} = require("../controller/urlController");

const UrlRouter = express
  .Router()
  .get("/url", urlGetController)
  .post("/url", urlPostController)
  .delete("/url/:url_id", urlDeleteController)
  .get("/url/:url_id", urlGetControllerById);
module.exports = UrlRouter;
