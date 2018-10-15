const mongoose = require('mongoose');

const api = {};


    
    api.getAll = (HogwartsStore) => (req, res) => 
    {
      let all=HogwartsStore.find({});
      console.log("Inside getAll: "+ all._collection.collection.collection);
     
        //res.status(200).json(all);
        return true;
      

    }

module.exports = api
