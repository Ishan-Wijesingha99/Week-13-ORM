// a model is something that represents a table in a database
// in Sequelize, a model is a class that extends Model, which itself is a class

// a model in Sequelize has a name, it does not have to be the same name of the table it represents in the database
// usually, models have singular names (book) whereas tables have pluralized names (books)

// need to import these from sequelize package
const { Model, DataTypes } = require('sequelize');
// need to import the connection you created to Sequelize
const sequelize = require('../config/connection');



// Create a new Sequelize model for books
// this model is just a class that extends Model
class Book extends Model {}

// then give Book properties by doing this...
Book.init(
  // An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves
  // we initialising Book to become this object
  // this object has properties that reprsent columns in the database table
  // and each column is itself an object that contains properties that describe the column 
  {
    // here we define a column called book_id
    book_id: {
      // here we say it's an INT, it's the primary key, and it autoincrements
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING
    },
    isbn: {
      type: DataTypes.STRING
    },
    pages: {
      type: DataTypes.INTEGER
    },
    edition: {
      type: DataTypes.INTEGER
    },
    // Will automatically be converted to `is_paperback` in table
    isPaperback: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    // need to write this to link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    // the only reason isPaperback is converted to is_paperback is because this is set to true
    underscored: true,
    // write this to name the model
    modelName: 'book'
  }
);

// export the model
module.exports = Book;
