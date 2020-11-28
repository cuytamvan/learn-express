const mysql = require('mysql');

const jCon = {
  host: process.env.DB_HOSTNAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};
const con = mysql.createConnection(jCon);

con.connect((err) => {
  if (err) throw err;
});

module.exports = con;
