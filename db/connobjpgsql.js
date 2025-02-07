const Pool = require("pg").Pool;
function connectionObj() {
  const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "mydbexpress",
    password: "nikunj123",
    port: 5432,
    max: 100,
  });
  return pool;
}
module.exports = { connectionObj };
