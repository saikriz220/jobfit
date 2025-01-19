const express = require('express');
const router = express.Router();
const { createUser,register,trummp,userLogin } = require('../controllers/userController');
const { createUserSchema, validate, userLogins } = require('../validations/userValidation');


// Define a test route
router.post('/test', (req, res) => {
    res.send('User route is working!');
  });
  
  router.post('/register', register);


  router.post('/create', validate(createUserSchema), createUser);


  router.post('/trial', trummp);


  router.post('/login', validate(userLogins), userLogin);



  module.exports = router;