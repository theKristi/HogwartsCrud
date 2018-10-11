const mongoose = require('mongoose');

const api = {};

api.store = (HogwartsStudents) => (req, res) => 
{
    
    api.getAll = () => (req, res) => 
    {
            HogwartsStudents.find((error, student) => 
            {
              if(error) return res.status(400).json(error);
              res.status(200).json(student);
              return true;  
            
            })
    }
}
module.exports = api
