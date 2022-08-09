// require sequelize npm package
const Sequelize = require('sequelize');

// creating environment variables for database name, username and password
require('dotenv').config()



// create a sequelize object using Sequelize constructor
const sequelize = new Sequelize(
  // the name of the database
  process.env.DB_NAME,
  // your username
  process.env.DB_USER,
  // your password
  process.env.DB_PASSWORD,
  // an object that specifies the host, the port, and also the database language in question
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

// export it out
module.exports = sequelize;
