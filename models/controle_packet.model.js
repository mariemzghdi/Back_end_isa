const sql = require("./db.js");

// constructor
const Controle_packet = function(controle_packet) {
  this.Tag_id=controle_packet.Tag_id,
  this.State_Tag=controle_packet.State_Tag ,
  this.Pack_id=controle_packet.Pack_id,
  this.QteT= controle_packet.QteT,
  this.FM01= controle_packet.FM01,
  this.FM02= controle_packet.FM02,
  this.FM03= controle_packet.FM03,
  this.FM04= controle_packet.FM04,
  this.BO01= controle_packet.BO01,
  this.BO02= controle_packet.BO02,
  this.BO03= controle_packet.BO03,
  this.BO04= controle_packet.BO04,
  this.BO05= controle_packet.BO05,
  this.BO06= controle_packet.BO06,
  this.BA01= controle_packet.BA01,
  this.BA02= controle_packet.BA02,
  this.BA03= controle_packet.BA03
};

Controle_packet.create = (newControle_packet, result) => {
  sql.query("INSERT INTO controle_packet SET ?", newControle_packet, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created  Controle_packet: ", { id: res.insertId, ...newControle_packet });
    result(null, { id: res.insertId, ...newControle_packet });
  });
};

Controle_packet.findById = (id, result) => {
  sql.query(`SELECT * FROM  controle_packet WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found  Controle_packet: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

Controle_packet.getAll = (Lastname, result) => {
  let query = "SELECT * FROM  controle_packet";

  if (Lastname) {
    query += ` WHERE title LIKE '%${Lastname}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(" controle_packet: ", res);
    result(null, res);
  });
};

Controle_packet.getQteT = result => {
  sql.query("SELECT QteT FROM controle_packet ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(" Controle_packet: ", res);
    result(null, res);
  });
};

Controle_packet.updateById = (id, pack_operation, result) => {
  sql.query(
    "UPDATE  controle_packet SET Firstname = ?, Lastname = ?, Rend = ? WHERE id = ?",
    [pack_operation.Code_operation,pack_operation.Code_operation
       ,pack_operation.Estim_Time, pack_operation.Firstname,
       pack_operation.Lastname,pack_operation.Machine_id,pack_operation.DigiTex,
       pack_operation.T_start,pack_operation.T_end,pack_operation.Rend,id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Controle_packet with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated  pack_operation : ", { id: id, ...controle_packet });
      result(null, { id: id, ...tutorial });
    }
  );
};

Controle_packet.remove = (id, result) => {
  sql.query("DELETE FROM controle_packet WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted Controle_packet with id: ", id);
    result(null, res);
  });
};

Controle_packet.removeAll = result => {
  sql.query("DELETE FROM controle_packet", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} Controle_packet`);
    result(null, res);
  });
};

module.exports = Controle_packet;