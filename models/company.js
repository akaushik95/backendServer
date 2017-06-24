 var express = require('express');
var restful = require('node-restful');
var mongoose = restful.mongoose;

mongoose.createConnection('mongodb://akaushik:akaushik8395@ds151141.mlab.com:51141/tnp_nagarro_assignment_2');

var companySchema = new mongoose.Schema({
	name: String,
	minimumCGPA: String,
	package: String,
	backlogsAllowed: Number,
	allowedBranches: [String],
	profileOffered: String,
	student_id: [String]
});

// RETURN MODELS
module.exports = restful.model('company_db_tb2', companySchema);