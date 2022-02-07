const Controle_packet = require('../models/controle_packet.model.js');

// Create and Save a new pack_operation
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
  }

  // Create a Pack_operation
  const controle_packet = new Controle_packet({
    id: req.body.id,
    Tag_id: req.body.Tag_id,
    State_Tag: req.body.State_Tag ,
    Pack_id: req.body.Pack_id,
    QteT: req.body.QteT,
    FM01: req.body.FM01,
    FM02: req.body.FM02,
    FM03:req.body.FM03,
    FM04:req.body.FM04,
    BO01:req.body.BO01,
    BO02:req.body.BO02,
    BO03:req.body.BO03,
    BO04:req.body.BO04,
    BO05:req.body.BO05,
    BO06:req.body.BO06,
    BA01:req.body.BA01,
    BA02:req.body.BA02,
    BA03:req.body.BA03,


  });

  // Save Pack_operation in the database
  Controle_packet.create(controle_packet, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Tutorial.',
      });
    else res.send(data);
  });
};

// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
  const title = req.query.title;

  Controle_packet.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

// Find a single Tutorial with a id
exports.findOne = (req, res) => {
    Controle_packet.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tutorial with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Tutorial with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

// find all published Tutorials
exports.findQte = (req, res) => {
   Controle_packet.getQteT((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

// Update a Tutorial identified by the id in the request
exports.update = (req, res) => {
   // Validate Request
   if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Controle_packet.updateById(
    req.params.id,
    new  controle_packet(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Tutorial with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Tutorial with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    Controle_packet.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tutorial with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Tutorial with id " + req.params.id
        });
      }
    } else res.send({ message: `Tutorial was deleted successfully!` });
  });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Controle_packet.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    else res.send({ message: `All Tutorials were deleted successfully!` });
  });
};
