// DEPENDENCIES
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const winston = require('winston');
const winstonRotator = require('winston-daily-rotate-file');

// CREATE A CONNECTION TO MLAB MONGODB DATABASE
mongoose.createConnection('mongodb://akaushik:akaushik8395@ds151141.mlab.com:51141/tnp_nagarro_assignment_2');

// EXPRESS
var app = express();
app.use(bodyParser.urlencoded({ extend: true}));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/index.html');
});
// ROUTES
app.use('/api', require('./api'));

// STARTING THE SERVER ON PORT 3000
app.listen(3000);
console.log('Server is running on port 3000');

