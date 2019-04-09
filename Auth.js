var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var jwt = require('jsonwebtoken')
var cors = require('cors')

require('dotenv').config()
//app.use(express.static('/home/santo/BTM/votingDapps/BTMVotingDAPP-DAO/'));
app.use(cors())
app.use(bodyParser.json());
var port = 9990;
app.listen(port);
console.log('server on' +   port);

app.post('/Auth/token-valid', (req, res) => {
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
})

app.post('/Auth/generate-token', (req, res) => {
  try {
    const { email, user_address } = req.body
    jwt.sign({
      data: {
        email: email,
        user_address: user_address
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
})
