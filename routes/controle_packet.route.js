module.exports = app => {
    const controle_packet = require("../controllers/controle_packet.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", controle_packet.create);
  
    // Retrieve all Tutorials
    router.get("/", controle_packet.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published",controle_packet.findQte);
  
    // Retrieve a single Tutorial with id
    router.get("/:id",controle_packet.findOne);
  
    // Update a Tutorial with id
    router.put("/:id",controle_packet.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", controle_packet.delete);
  
    // Delete all Tutorials
    router.delete("/",  controle_packet.deleteAll);
  
    app.use('/api/tutorials', router);
  };