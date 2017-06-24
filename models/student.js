var express = require('express');
var restful = require('node-restful');
var mongoose = restful.mongoose;

mongoose.connect('mongodb://akaushik:akaushik8395@ds151141.mlab.com:51141/tnp_nagarro_assignment_2');

var studentSchema = new mongoose.Schema({
	name:{
		type : String,
		required : true
	},
	department:{
		type : String,	
		required : true
	}, 
	rollno:{
		type : Number,
		required : true
	},
	cgpaTillCurrentSemester:{
		type : Number,
		required : true
	},
	class10thCgpaorPercentage:{
		type : Number,
		required : true
	},
	class12thPercentage:{
		type : Number,
		required : true
	},
	yearOfpassingClass12th:{
		type : Number,
		required : true
	}
});

// RETURN MODELS
module.exports = restful.model('student_db_tb1', studentSchema);




