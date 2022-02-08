const Pool = require("pg").Pool;

const pool = new Pool({
  user: "carolynscobie",
  password: "labber",
  host: "localhost",
  port: 5432,
  database: "mood_reads"
});

module.exports = pool;