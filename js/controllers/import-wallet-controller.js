var express = require('express');
var bodyParser = require('body-parser');
const lightwallet  = require('eth-lightwallet');
var global_keystore ;
var HookedWeb3Provider = require("hooked-web3-provider");
var Web3 = require('web3');
const hdPath =  `m/44'/60'/0'/0`;
//const setWeb3Provider = require('./libs/setWeb3Provider');
const provider = "https://rinkeby.infura.io/TDcx34wipg0sYiyLElrW";
var passwordHash = require('sha256');
var app = express();
var nonceIncrement;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var web3 = new Web3(new Web3.providers.HttpProvider(provider));
module.exports.importWallet = function(req,res) {
    try {
  
    // allow time to render components before cpu intensive tasks:
  
     var resObjItems = {};
     var promise = new Promise(function (resolve, reject) {
     const password = passwordHash(req.body.password);
     const seedPhrase = req.body.seed;
     lightwallet.keystore.createVault({
       password: password,
       seedPhrase: seedPhrase, // Optionally provide a 12-word seed phrase
       // salt: fixture.salt,     // Optionally provide a salt.// A unique salt will be generated otherwise.
       hdPathString: hdPath    // Optional custom HD Path String
     }, function (err, ks) {
      global_keystore = ks;
      //resolve(global_keystore.serialize())
     // setWeb3Provider(ks);
       // Some methods will require providing the `pwDerivedKey`,
       // Allowing you to only decrypt private keys on an as-needed basis.
       // You can generate that value with this convenient method:
       //ks = new lightwallet.keystore(seedPhrase, password);
       console.log(ks);
       web3.setProvider(global_keystore);
       //var address = '';
       //var Indexer = 0;
      global_keystore.keyFromPassword(password, function (err, pwDerivedKey) {
         if (err) throw err;
         //ks = new lightwallet.keystore(seedPhrase, pwDerivedKey);
         //console.log(ks);
         // generate five new address/private key pairs
         // the corresponding private keys are also encrypted
        global_keystore.generateNewAddress(pwDerivedKey, 1);
         //address = ks.getAddresses();
         //console.log(address);
         //var resObjItems= {};
         const address = global_keystore.getAddresses().slice(-1)[0];
         console.log(address);
  
        resObjItems.address = global_keystore.getAddresses().slice(-1)[0]
        resObjItems.keystore = global_keystore.serialize();
        //var prv_key = ks.exportPrivateKey(address, pwDerivedKey);
        //resObjItems.indexer = ks.getAddresses().length
       // retrieveDetails.push(resObjItems)
        resolve(resObjItems);
  
       global_keystore.passwordProvider = function (callback) {
           const pw = password;
           callback(null, pw);
         };
         // Now set ks as transaction_signer in the hooked web3 provider
         // and you can start using web3 using the keys/addresses in ks!
       });
      });
      });
      promise.then(function(resObjItems) {
      res.send(resObjItems);
      });
  } catch (err) {
      const errorString = `importWallet error - ${err}`;
       console.log(err.message + errorString);
    }
    finally{
      console.log("import-wallet-controller.js importWallet Executed at" + Date.now());
    }
  }