const express = require('express');
const router = express.Router();
const { createUser,register,trummp } = require('../controllers/userController');
const { createUserSchema, validate } = require('../validations/userValidation');


// Define a test route
router.post('/test', (req, res) => {
    res.send('User route is working!');
  });
  
  router.post('/register', register);


  router.post('/create', validate(createUserSchema), createUser);


  router.post('/trial', trummp);


  module.exports = router;