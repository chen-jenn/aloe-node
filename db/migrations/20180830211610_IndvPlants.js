// Making the table for adding individual plant records
exports.up = function(knex, Promise) {
  return knex.schema.createTable("indv_plants", table => {
    table.increments("id");
    table.string("species_name");
    table.string("common_name");
    table.string("indv_name");
    table.text("description");
    table.timestamp("createdAt").defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("indv_plants")
};
