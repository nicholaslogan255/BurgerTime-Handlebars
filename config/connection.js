// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
// create a local mysql connection definition for the burgertime_db database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "root",
  database: "burgertime_db"
});
}


// Make connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
