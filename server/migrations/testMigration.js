exports.up = function(knex) {
    return knex.schema.createTable('test_table', table => {
        table.increments('id').primary();
        table.string('name');
    });
};
    
exports.down = function(knex) {
    return knex.schema.dropTable('test_table');
};
    
