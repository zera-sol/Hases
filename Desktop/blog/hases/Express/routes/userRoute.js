var express = require('express');
const userModel = require('../models/goal.model');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/add-user', function(req, res, next) {
   let useObj = new userModel({
    name: "Tihitna Mulugeta", 
    age: 17
   })
   useObj.save()
   console.log(`A user with ${useObj} cridntial is added`)
});

router.get('/find-users', async (req, res, next) => {
  try{
    const Users = await userModel.find()
    res.status(200).json(Users)
  } catch(error){
    res.status(500).json("Error Found!")
  }
        
});
module.exports = router;
