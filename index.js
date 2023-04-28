const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "practice1"
});

con.connect((err) => {
  if (err) {
    console.log(err);
    return err;
  }
  console.log('Database connected');
});

const sql = "INSERT INTO users (user_name, user_age, user_country) VALUES ?";
const values = [  ['Franciskus', 66, 'China'],
  ['Beltran', 52, 'France'],
  ['Nicolais', 61, 'China'],
  ['Oralle', 74, 'France'],
  ['Nikolas', 81, 'China'],
  ['Alverta', 26, 'Portugal'],
  ['Poppy', 65, 'Greece'],
  ['Ernestine', 65, 'Indonesia'],
  ['Mallory', 67, 'Russia'],
  ['Niki', 27, 'China'],
  ['Calv', 63, 'United States'],
  ['Tawnya', 88, 'Greece'],
  ['Celesta', 72, 'Indonesia'],
  ['Jermaine', 58, 'Canada'],
  ['Bernald', 42, 'Portugal']
];

con.query(sql, [values], function (err, result) {
  if (err) throw err;
  console.log("Number of records inserted: " + result.affectedRows);
  con.end(); // close the connection after the query has finished
});