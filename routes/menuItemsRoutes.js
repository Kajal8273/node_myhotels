const express = require('express');
const router= express.Router();
const MenuItem = require('../models/MenuItem');



// POST method to add a Menu item
router.post('/', async(req,res)=>{
    try{
       const data = req.body
       const newMenu = new MenuItem(data);
       const response = await newMenu.save();
       console.log('data saved');
       res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(200).json({error:'internal server error'});
    }
})

//GET method to get menu itemm
router.get('/',async(req,res)=>{
    try{

        const data = await MenuItem.find();
        console.log('data saved');
        res.status(200).json(data);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
})

router.put('/:id',async(req,res)=>{
    try{
        const menuid = req.params.id; //extract the id from the url paramter
        const updatedMenu = req.body; // updated data for the person

        const response = await MenuItem.findByIdAndUpdate(menuid,updatedMenu,{
            new : true, // return the updated document
            runValidators :true, //run mongoose validation
        })
        if(!response){
            return res.status(404).json({error:'item  not found'});
        }
        console.log('item data updated');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});   
    }
})

router.delete('/:id',async(req,res)=>{
    try{
         const menuid = req.params.id;

         const response = await MenuItem.findByIdAndDelete(menuid);
         if(!response){
            return res.status(404).json({error:'Item not found'});
        }
        console.log('item deleted');
        res.status(200).json({message:'item deletd :'});
     
        }

    
    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});   
    }
})

// cvvbnk
module.exports = router;