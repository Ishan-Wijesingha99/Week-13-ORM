// express package
const express = require('express');

// Import the connection object
const sequelize = require('./config/connection');

// create express app
const app = express();

// create port
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database before starting the Express.js web server
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
