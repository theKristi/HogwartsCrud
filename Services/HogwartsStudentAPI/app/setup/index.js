const mongoose = require('mongoose'),
	  StudentModel = require('@HogwartsStudentModels/HogwartsStudent');
     
	  
const models = {
	HogwartsStudent: mongoose.model('HogwartsStudent'),
   
}
module.exports = models;