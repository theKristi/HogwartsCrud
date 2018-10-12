const mongoose = require('mongoose');

const api = {};


    
    api.getAll = (HogwartsStudents) => (req, res) => 
    {
            HogwartsStudents.find((error, student) => 
            {
              if(error) return res.status(400).json(error);
              res.status(200).json(student);
              return true;  
            
            })
    }

module.exports = api
