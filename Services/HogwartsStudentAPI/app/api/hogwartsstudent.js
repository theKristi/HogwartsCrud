const mongoose = require('mongoose');

const api = {};


    
    api.getAll = (client) => (req, res) => 
    {
    //const collection = client.db("WizardingWorld").collection("HogwartsStudents");
   
      let myres=client.find();
      console.log(myres);

      return true;

    }

module.exports = api
