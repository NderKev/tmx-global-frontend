var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var jwt = require('jsonwebtoken')
var cors = require('cors')
var otplib = require('otplib');
var Cryptr = require('cryptr');

require('dotenv').config()
app.use(cors())
app.use(bodyParser.json());

module.exports.authenticateToken=function(req, res){
  try{
    const token = req.body.auth_token
    jwt.verify(token, process.env.SECRET_TOKEN, (err, decoded) => {
      if(err) {
        return res.status(401).send({
          error: 1,
          error_message: 'Invalid Token'
        })
      }
        return res.status(200).send({
          error: 0,
          returns: decoded
        })
    })
  }catch(err) {
    return res.status(500).send({
      error: 1,
      error_message: err.message
    })
  }
}

module.exports.generateToken=function(req, res){
  try {
    const { email, mob_no } = req.body
    jwt.sign({
      data: {
        email: email,
        mob_no: mob_no
      }
    }, process.env.SECRET_TOKEN , { expiresIn: '3h' }, (err, decoded) =>{
      if(err) {
        return res.status(500).send({
          error: 1,
          error_message: err.message
        })
      }

      return res.send({
        error: 0,
        returns: {
          auth_token: decoded
        }
      })

    });
  } catch (err) {
    return res.status(500).send({
      error: 1,
      error_message: err.message
    })
  }
}

module.exports.generateOTP = function(req,res){
    try { 
        const {mob_no} = req.body
        otplib.authenticator.options = {
          step: 120,
          window: 1
        };
        //import otplib from 'otplib';
        //const secret = otplib.authenticator.generateSecret(mob_no);
        var secret = cryptr.encrypt(mob_no);
        const token = otplib.authenticator.generate(secret);
        return res.send({
            error: 0,
            returns: {
             secret : secret,
              otp: token
            }
          })
    } catch (error) {
        return res.status(500).send({
            error: 1,
            error_message: err.message
          })
    }
}

module.exports.verifyOTP = function(req,res){
    try {
        const {otp,secret} = req.body
        const isValid = otplib.authenticator.verify({ otp, secret})
        console.log(isValid);
        if (!isValid){ 
        return res.send({
            error: 0,
            "message" : "invalid OTP"
          })
        }
        else{
            return res.send({
                error: 0,
                "message" : "OTP verified"
              })
        }

    } catch (error) {
        return res.status(500).send({
            error: 1,
            error_message: err.message
          })
    }
}