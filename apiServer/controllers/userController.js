const bcrypt = require('bcrypt');
const { createUserInDB } = require('../models/userModel');

const createUser = async (req, res) => {
    const { first_name, last_name, email, password, usertype } = req.body;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Call the model function with the hashed password
        const response = await createUserInDB(first_name, last_name, email, hashedPassword, usertype);

        res.status(200).json({
            status: response.status,
            message: response.message,
            user_uuid: response.user_uuid,
        });
    } catch (error) {
        console.error('Error creating user:', error.message);
        res.status(500).json({ status: 0, message: 'Internal Server Error' });
    }
};


const register =  async (req, res) => {
    res.status(201).json({
        message: 'User registered successfully'
      });

}
;

module.exports = { createUser,register };
