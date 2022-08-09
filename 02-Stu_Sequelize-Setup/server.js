// modules
const express = require('express');
const sequelize = require('./Unsolved/config/connection');

// create express app
const app = express();

// create port
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// sent up sequelize, and only THEN, listen on port
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
