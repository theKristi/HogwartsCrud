const mongoose = require('mongoose'),
	  StudentModel = require('@HogwartsStudentModels/HogwartsStore');
     
	  
const models = {
	HogwartsStudent: mongoose.model('HogwartsStudent'),
   
}
module.exports = models;