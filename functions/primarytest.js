const p1 = require("../db/connobjpgsql");
const o1 = p1.connectionObj();
const FUnctionSelect = (req, resp) => {
  try {
    o1.query("SELECT * FROM public.table1;", (err, result) => {
      if (err) {
        console.log("Error executing query", err.stack);
        resp.status(500).send("Something went wrong!");
      } else {
        resp.json(result.rows);
      }
    });
  } catch {
    console.log("Error executing query");
    resp.status(500).send("Something went wrong!");
  }
};
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
const FunctUpdate = (req, resp) => {
  try {
    v1 = req.body.var1;
    v2 = req.body.var2;
    v3 = req.body.var3;
    o1.query(
      `UPDATE public.table1
	SET field1='${v1}', field3='${v3}'
	WHERE t1_id = ${v2};`,
      (err, result) => {
        if (err) {
          console.log("Error executing query", err.stack);
          resp.status(500).send("Something went wrong!");
        } else {
          resp.send("Data Updated successfully!");
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
  FunctUpdate,
  FUnctionSelect,
};
