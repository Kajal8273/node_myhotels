const express = require('express');
const Person = require('../models/Person');
const router= express.Router();

//const Person=require('./models/Person');

//POST method to add a new Person

router.post('/',async(req,res)=>{
    try{
        const data = req.body


     //create a new person doc using mongoose model
     
     const newPerson = new Person(data);
     
     //save the new person  to database
     
     const response = await newPerson.save();
     console.log('data saved');
     res.status(200).json(response);
     
     }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});

    }
})

//GET Method to get person data

router.get('/', async (req, res) => {
    try {
      const { username, password } = req.query; // ya req.body if POST
  
      const data = await Person.findOne({ username, password }); // 👈 match based on input
  
      if (!data) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'internal server error' });
    }
  });
  


//Parametrised API calls
router.get('/workType',async(req,res)=>{
    try{
        const workType = req.params.workType;
        if(workType=='chef'|| workType=='manager'||workType=='waiter'){
            const response =  await Person.find({work:workType})
            console.log('data fetched');
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error:'invalid work type'});
        }
 
    }
    catch(err){
       
         console.log(err);
        res.status(500).json({error:'internal server error'});
    }
    
})

router.put('/:id',async(req,res)=>{
    try{
        const personId = req.params.id; //extract the id from the url paramter
        const updatedPerson = req.body; // updated data for the person

        const response = await Person.findByIdAndUpdate(personId,updatedPerson,{
            new : true, // return the updated document
            runValidators :true, //run mongoose validation
        })
        if(!response){
            return res.status(404).json({error:'person not found'});
        }
        console.log('data updated');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});   
    }
})

router.delete('/:id',async(req,res)=>{
    try{
     const personId = req.params.id;

     const response = await Person.findByIdAndDelete(personId);
    if(!response){
        return res.status(404).json({error:'Person not found'});
    }
    console.log('data deleted');
    res.status(200).json({message:'person deletd :'});
 
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});   
    }
})

module.exports = router;
