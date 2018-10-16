const mongoose = require('mongoose');

const api = {};


    
    api.getAll = (HogwartsStore) => (req, res) => 
    {
        HogwartsStore.find({}, (error, students) => {
			if(error) throw error;
			res.status(200).json(students);
		});
      

    }

module.exports = api
