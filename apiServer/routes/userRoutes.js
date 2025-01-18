const express = require('express');
const router = express.Router();
const { createUser,register } = require('../controllers/userController');
const { createUserSchema, validate } = require('../validations/userValidation');


// Define a test route
router.post('/test', (req, res) => {
    res.send('User route is working!');
  });
  
  router.post('/register', register);


  router.post('/create', validate(createUserSchema), createUser);


  module.exports = router;