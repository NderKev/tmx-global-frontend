
var express = require("express");
var bodyParser=require('body-parser');
 
var connection = require('./js/db-config');
var app = express();
 
var loginController=require('./js/controllers/login-controller');
var signupController=require('./js/controllers/signup-controller');
var authController = require('./js/controllers/auth-controller')
var createWalletController = require('./js/controllers/create-wallet-controller')
var importWalletController = require('./js/controllers/import-wallet-controller')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.get('/', function (req, res) {  
  // res.sendFile( __dirname + "/" + "index.html" );  
//})  
 
//app.get('/login.html', function (req, res) {  
  // res.sendFile( __dirname + "/" + "login.html" );  
//})  
 
/* route to handle login, authentication and registration */
app.post('/api/register',signupController.register);
app.post('/api/login',loginController.login);
app.post('/api/generateToken',authController.generateToken);
app.post('/api/authToken',authController.authenticateToken);
app.post('/api/generateOTP',authController.generateOTP);
app.post('/api/verifyOTP',authController.verifyOTP);
app.post('/api/generateWallet', createWalletController.generateWallet);
app.post('/api/importWallet', importWalletController.importWallet);
 
//console.log(loginController);
app.post('./js/controllers/signup-controller', signupController.register);
app.post('./js/controllers/login-controller', loginController.login);
app.post('./js/controllers/auth-controller', authController.generateToken);
app.post('./js/controllers/auth-controller', authController.authenticateToken);
app.post('./js/controllers/auth-controller', authController.generateOTP);
app.post('./js/controllers/auth-controller', authController.verifyOTP);
app.post('./js/controllers/create-wallet-controller', createWalletController.generateWallet);
app.post('./js/controllers/import-wallet-controller', importWalletController.importWallet);

app.listen(8012);