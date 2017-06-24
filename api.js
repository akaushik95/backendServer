// DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');
var validator = require('validator');
var router = express.Router();
const errorlog = require('./logger').errorlog;
const successlog = require('./logger').successlog;

// REGISTER A STUDENT (MODELS AND ROUTES)
var student = require('./models/student');
student.methods(['get', 'put', 'post', 'delete']);
student.register(router, '/student');

// VALIDATION FOR ROLLNO AND CGPA
student.before('post', studentValidator)
	.before('put', studentValidator);

// FUNCTION FOR STUDENT VALDATION
function studentValidator(req, res, next) {
	check(''+req.body.yearOfpassingClass12th).isInt;
	check(''+req.body.rollno).isInt;
	check(''+req.body.cgpa).isDecimal;
	next();
}

// REGISTER A COMPANY (MODELS AND ROUTES)
var company = require('./models/company');
company.methods(['get', 'put', 'post', 'delete']);
company.register(router, '/company');

// vVALIDATION FOR PACKAGE AND MINIMUM CGPA REQUIRED
company.before('post', companyValidator)
	.before('put', companyValidator);

// FUNCTION FOR COMPANY VALIDATION
function companyValidator(req, res, next) {
	check(''+req.body.backlogsAllowed).isInt;
	check(''+req.body.minimumCGPA).isInt;
	check(''+req.body.package).isAlpha;
	next();
}

// TO CREATE SUCCESS AND ERROR LOGS
successlog.info('Status: Success, data saved successfully !!!!');
errorlog.error('Status: Error, parameters mismatch !!!!');

// RETURN ROUTER
module.exports = router;