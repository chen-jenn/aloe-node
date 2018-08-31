const knexfile = require("../knexfile.js");
// use knex elsewhere in the app
const knex = require("knex")(knexfile["development"]);

module.exports = knex;
