const knex = require('knex');
const db = knex({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'Root@123',
    database: 'test_db'
  }
});

module.exports = db;
