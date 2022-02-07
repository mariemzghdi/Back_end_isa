module.exports = app => {
  const  controle_packet = require("../controllers/pack_operationl.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", controle_packet.create);

  // Retrieve all Tutorials
  router.get("/", controle_packet.findAll);

  // Retrieve all published Tutorials
  router.get("/published", controle_packet.findRend);

  // Retrieve a single Tutorial with id
  router.get("/:id",pack_operation.findOne);

  // Update a Tutorial with id
  router.put("/:id", pack_operation.update);

  // Delete a Tutorial with id
  router.delete("/:id", pack_operation.delete);

  // Delete all Tutorials
  router.delete("/",  pack_operation.deleteAll);

  app.use('/api/tutorials', router);
};