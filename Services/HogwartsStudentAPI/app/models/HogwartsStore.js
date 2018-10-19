const mongoose = require('mongoose');

const Schema= mongoose.Schema({
    FirstName: {
      type: String,
      required: true
    },
    LastName: {
        type: String,
        required: true
      },
    House: {
      type: String,
      required: true
    }
    
    
});

mongoose.model('HogwartsStudent', Schema,"HogwartsStudents");