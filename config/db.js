const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud_api'
});

db.connect((err) => {
  if (err) {
    console.error('DB ERROR:', err.message);
    return;
  }
  console.log('Database connected');
});

module.exports = db;
