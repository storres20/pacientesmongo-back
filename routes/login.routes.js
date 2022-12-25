const express = require('express');
const Model = require('../models/login.model');

const router = express.Router()

module.exports = router;

//Post Method - create
router.post('/create', async (req, res) => {
  //res.send('Post API')
  
  const data = new Model({
    user: req.body.user,
    username: req.body.username,
    password: req.body.password
  })
  
  try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
})

//Post Method - Login
router.post('/', async (req, res) => {
  //res.send('Post API')
  
  data = {
    username: req.body.username,
    password: req.body.password
  }
  
  try {
      const data2 = await Model.findOne(data);
      
      if (data2 === null) {
        res.json({
          status: 0,
          message: "User doesn't exist"
        })
      }
      else if (data2.username === data.username && data2.password === data.password) {
        res.json({
          status: 1,
          message: "success"
        })
      }
      
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
})

//Get all Method
router.get('/', async (req, res) => {
  //res.send('Get All API')
  
  try{
    const data = await Model.find();
    res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
})

//Get by ID Method
router.get('/:id', async (req, res) => {
  //res.send('Get by ID API')
  //res.send(req.params.id)
  
  try{
    const data = await Model.findById(req.params.id);
    res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
})

//Update by ID Method
router.patch('/:id', async (req, res) => {
  //res.send('Update by ID API')
  
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(
        id, updatedData, options
    )

    res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})

//Delete by ID Method
router.delete('/:id', async (req, res) => {
  //res.send('Delete by ID API')
  
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id)
    res.send(`Document with ${data.name} has been deleted..`)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})