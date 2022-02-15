const Pack_operation = require("../models/pack_operationl.model.js");

module.exports = app => {
  const  pack_operation = require("../controllers/pack_operationl.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", pack_operation.create);

  // Retrieve all Tutorials
  router.get("/", pack_operation.findAll);

  // Retrieve all published Tutorials
  router.get("/Rend", pack_operation.findRend);

  // Retrieve a single Tutorial with id
  router.get("/:id",pack_operation.findOne);

  // Update a Tutorial with id
  router.put("/:id", pack_operation.update);

  // Delete a Tutorial with id
  router.delete("/:id", pack_operation.delete);

  // Delete all Tutorials
  router.delete("/",  pack_operation.deleteAll);

  app.use('/api/pack_operation', router);
};