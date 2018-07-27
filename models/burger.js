// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


//==================================================================================================
// The Model is called by controllers to perform CRUD actions to the database, and return the result
//  since these actions are repetetive, we created an ORM (Object-relational Mapping) File
//  to help us define the database queries
//==================================================================================================

// create burger model
var burger = {
  all: function(cb) {

    // use our orm to search in the database table 'burgers' and get all entries
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
 // use our orm to create an new entry into the database table 'burgers' 
 // cols is array of database columns to fill, and vals are the corresponding values of new entry
  create: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  // use our orm to update a entry into the database table 'burgers' for entries that meet a certain condition
  update: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },

  // use our orm to delete an entry into the database table 'burgers'
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
