// Update with your config settings.
module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "aloe", //db name
      user: "jennifer", //in the future these should really be environment variables
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

// Notes to navigate psql because i forget
// \l listing all the dbs on your system
// \c aloe - to go into the aloe db
// \dt - to list all the database relations, all the tables that are relevant to that db
