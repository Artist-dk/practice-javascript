const db = require('../config/db');

exports.getAll = () => db('test_table').select('*');
exports.insert = (data) => db('test_table').insert(data);