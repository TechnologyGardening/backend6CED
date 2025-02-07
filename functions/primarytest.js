const p1 = require("../db/connobjpgsql");
const o1 = p1.connectionObj();
const FunctInsert = (req, resp) => {
  try {
    v1 = req.body.var1;
    v2 = req.body.var2;
    v3 = req.body.var3;
    o1.query(
      `INSERT INTO public.table1
      (field1, field2, field3)VALUES ('${v1}',${v2} , '${v3}');`,
      (err, result) => {
        if (err) {
          console.log("Error executing query", err.stack);
          resp.status(500).send("Something went wrong!");
        } else {
          resp.send("Data inserted successfully!");
        }
      }
    );
  } catch {
    console.log("Error executing query");
    resp.status(500).send("Something went wrong!");
  }
};
module.exports = {
  FunctInsert,
};
