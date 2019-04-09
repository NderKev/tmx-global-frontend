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
module.exports.generateWallet = function(req,res) {
try
{
  var seedObj = [];
  var promise = new Promise(function (resolve, reject) {
  var {email ,password} = req.body
  password = passwordHash(password);
  var seedPhrase = lightwallet.keystore.generateRandomSeed();
//generate keystore
    lightwallet.keystore.createVault({
         password: password,
         seedPhrase: seedPhrase, // Optionally provide a 12-word seed phrase
      // salt: fixture.salt,     // Optionally provide a salt.// A unique salt will be generated otherwise.
         hdPathString: hdPath    // Optional custom HD Path String
       }, function (err, ks) {
         global_keystore = ks;
   // set your provider to keystore to be able to sign Transactions
         web3.setProvider(global_keystore);
  // Some methods will require providing the `pwDerivedKey`,
  // Allowing you to only decrypt private keys on an as-needed basis.
  // You can generate that value with this convenient method:

        global_keystore.keyFromPassword(password, function (err, pwDerivedKey) {
            if (err) throw err;

    // generate A new address/private key pairs
    // the corresponding private keys are also encrypted
         global_keystore.generateNewAddress(pwDerivedKey, 1);
            var items = {};

         address = ks.getAddresses().slice(-1)[0];
    //console.log(address);
          items.address = address;
          //console.log("User's address is"+ address);
          //var walletID =  web3.eth.iban.fromAddress(address).toString();
          //items.walletID = walletID;
          items.seedPhrase = seedPhrase;
    //address = ks.getAddresses().slice(-1)[0];
    //Indexer = ks.getAddresses().length;

          seedObj.push(items);
          resolve(seedObj);

         global_keystore.passwordProvider = function (callback) {
              const pw = password;
              callback(null, pw);
         };
  });
})
})
promise.then(function(data) {
      var result = {}
      result['result'] = seedObj[0],
      result['global_keystore'] = global_keystore.serialize();
      result['status'] = true

      res.send(result);
  });

}
 catch(err){
      console.log("The error is"+ err.message);
}
finally{
  console.log("create-wallet-controller.js Generate Wallet Executed at : " + Date.now());
}
}

