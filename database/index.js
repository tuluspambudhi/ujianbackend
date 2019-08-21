const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'Tulus',
    password: 'mysqltulu5',
    database: 'moviepurwadhika',
    port: 3306
});

module.exports = conn;