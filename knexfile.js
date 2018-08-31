// Update with your config settings.
module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "aloe", //db name
      user: "jennifer",
      password: "hi"
    },
    migrations: {
      tableName: "knex_migrations",
      // This property names the table that contains migration information
      directory: "./db/migrations"
      // This property specifies which directory migration files go into
    }
  }
}
