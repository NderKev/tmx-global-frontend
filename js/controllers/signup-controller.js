var Cryptr = require('cryptr');
var express=require("express");
var connection = require('./../db-config');
// cryptr = new Cryptr('myTotalySecretKey');
 
module.exports.register=function(req,res){
    //var today = new Date();
  var encryptedString = cryptr.encrypt(req.body.password);
  //console.log(encryptedString)
    var users={ 
        "first_name":req.body.first_name,
        "last_name" : req.body.last_name,
        "mob_no": req.body.mob_no,
        "email": req.body.email,
        "password":encryptedString,
        "location": req.body.location
    }
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    });
}