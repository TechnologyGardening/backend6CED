const con = require("../db/connobjpgsql");
const pool = con.connectionObj();
const dbfun1 = (req, res) => {
  pool.query(
    "SELECT * FROM table1 WHERE id = $1",
    [req.params.id],
    (err, result) => {
      if (err) {
        console.log("Error executing query", err.stack);
        res.status(500).send("Something went wrong!");
      } else {
        res.json(result.rows);
      }
    }
  );
};
module.exports = { dbfun1 };
