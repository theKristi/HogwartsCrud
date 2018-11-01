const mongoose = require('mongoose');

const api = {};


    
    api.getAll = (HogwartsStore) => (req, res) => 
    {
        HogwartsStore.find({}, (error, students) => {
            if(error) throw error;
            console.log("getting all students");
            res.status(200).json(students);
           
		});
      

    }
    api.addStudent=(HogwartsStudent)=> (req, res) =>
    {
        console.log("creating student:"+ req.body.House);
        if (!req.body.FirstName || !req.body.LastName|| !req.body.House) res.json({ success: false, message: 'Please, pass a firstname, lastname, and house.' });
        else {
            const student=new HogwartsStudent({
                FirstName:req.body.FirstName,
                LastName:req.body.LastName,
                House: req.body.House
                });
                
                student.save(error=>{
                        if(error) throw error;
                        res.json({ success: true, message: 'Student created successfully' });
                        });
        }
       
    }
    api.deleteStudent=(HogwartsStore)=>(req, res) =>
    {
        if(!req.body.id)res.json({ success: false, message: 'Please pass a vaild id' });
        else{
            HogwartsStore.deleteOne({_id: req.body.id});
        }
    }

module.exports = api
