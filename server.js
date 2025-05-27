console.log("server file is running ");



/* function mult(a,b){
    return a*b;
} */
/* var add=function(a,b){
    return a+b;
} */


// --------------------


/* 
   var add=(a,b)=>{return a+b;}



var result= add(6,5);
console.log(result);

(function(){
    console.log('kajal is now');
})();
 */


//---------------------


/* function callback(){
    console.log('hello ji');
}
const add = function(a,b,callback){
    var res = a+b;
    console.log('result: ' +res);
    callback();
}
add(4,60,callback); */

//---------------------------
/* var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user);
//console.log(user.username);


fs.appendFile('greeting.txt',' Hello ' +user.username + '!\n',()=>{
    console.log('file is created');
});

console.log(fs); */

//---------------

/*
const notes = require('./notes.js');
var _= require('lodash');

var age = notes.age;
var res = notes.addnum(age+12,2);
console.log(age);
console.log('result is ' +res);


var data =["abc" ,"abc",1,2,3,4,2,'name','age'];
var filter =_.uniq(data);
console.log(filter);

console.log(_.isString(true));

*/


const express = require('express');
const app =express();

const db = require('./db');
require('dotenv').config();


const bodyParser = require('body-parser');
app.use(bodyParser.json());  //req.body
const PORT = process.env.PORT || 3000;




app.get('/',function(req,res){
    res.send('Welcome to my hotel..')
})


//POST method to add a new Person

//GET Method to get person data



// POST method to add a Menu item

//GET method to get menu itemm

//Import the router files

const personRoutes = require('./routes/personRoutes');
const menuItemsRoutes = require('./routes/menuItemsRoutes');

//Use the routers
app.use('/person',personRoutes);
app.use('/menu',menuItemsRoutes);

app.listen(3000,()=>{
    console.log('active on port 3000');
})
 

