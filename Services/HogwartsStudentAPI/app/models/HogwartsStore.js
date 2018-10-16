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
    },
    
    index: {
      type: Number,
      required: true
    },
    
    _id: {
        type: mongoose.Schema.Types.ObjectId,
     
    },
    
    
});

mongoose.model('HogwartsStudent', Schema,"HogwartsStudents");