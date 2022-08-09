const express = require('express');
const sequelize = require('./config/connection');



// need to import model to sync table with database
const Book = require('./models/Book');



const app = express();
const PORT = process.env.PORT || 3001;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Force: true, to drop/recreate tables on every sync
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
