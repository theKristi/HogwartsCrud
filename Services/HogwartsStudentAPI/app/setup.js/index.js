const mongoose = require('mongoose'),
	  StudentModel = require('@HogwartsStudentModels/hogwartsstudent'),
     
	  
const models = {
	Student: mongoose.model('Student'),
   
}
module.exports = models;