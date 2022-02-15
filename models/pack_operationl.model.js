const sql = require("./db.js");

// constructor
const Pack_operation = function(pack_operationl) {
  this.Pack_id = pack_operation.Pack_id;
  this.Code_operation =pack_operation.Code_operation;
  this.Operation_name = pack_operation.Operation_name;
  this.Estim_Time = pack_operation.Estim_Time;
  this.Firstname = pack_operation.Firstname;
  this.Lastname = pack_operation.Lastname;
  
  this.Machine_id = pack_operation.Machine_id;
  this.DigiTex = pack_operation.DigiTex;
  this.T_start = pack_operation.T_start;
  this.T_end = pack_operation.T_end;
  this.Rend = pack_operation.Rend;
};

Pack_operation.create = (newPack_operation, result) => {
  sql.query("INSERT INTO pack_operation SET ?", newPack_operation, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created pack_operation: ", { id: res.insertId, ...newPack_operation });
    result(null, { id: res.insertId, ...newpack_operation });
  });
};

Pack_operation.findById = (id, result) => {
  sql.query(`SELECT * FROM pack_operation WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found pack_operation: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

Pack_operation.getAll = (Lastname, result) => {
  let query = "SELECT * FROM pack_operation";

  if (Lastname) {
    query += ` WHERE title LIKE '%${Lastname}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("pack_operation: ", res);
    result(null, res);
  });
};

Pack_operation.getRend = result => {
  sql.query("SELECT Firstname,Rend FROM pack_operation   WHERE (Rend <>  '') AND(Rend < 100 ) ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(" Pack_operation: ", res);
    result(null, res);
  });
};

Pack_operation.updateById = (id, pack_operation, result) => {
  sql.query(
    "UPDATE  pack_operation SET Firstname = ?, Lastname = ?, Rend = ? WHERE id = ?",
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
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated  pack_operation : ", { id: id, ...tutorial });
      result(null, { id: id, ...tutorial });
    }
  );
};

Pack_operation.remove = (id, result) => {
  sql.query("DELETE FROM pack_operation WHERE id = ?", id, (err, res) => {
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

    console.log("deleted tutorial with id: ", id);
    result(null, res);
  });
};

Pack_operation.removeAll = result => {
  sql.query("DELETE FROM pack_operations", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} pack_operation`);
    result(null, res);
  });
};

module.exports =  Pack_operation;