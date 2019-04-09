var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost', //'kelvin-q524uqk',
  user     : 'root',
  password : '',
  database : 'tmx_dapp'
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error while connecting with database");
}
});
module.exports = connection; 