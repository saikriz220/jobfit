const bcrypt = require('bcrypt');
const { createUserInDB,userSignin } = require('../models/userModel');

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



const userLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Fetch the user details from the database
        const response = await userSignin(email,password);

        if (response.status === 1) {
            // Verify the plain password with the hashed password
            const isPasswordCorrect = await bcrypt.compare(password, response.passowrd);

            if (isPasswordCorrect) {
                res.status(200).json({
                    status: 1, // Success
                    user_id: response.user_id,
                    user_type: response.user_type,
                    user_name: response.username,
                });
            } else {
                res.status(401).json({
                    status: 0, // Password mismatch
                    user_id: null,
                    user_type: null,
                    message: 'Invalid email or password',
                });
            }
        } else {
            res.status(401).json({
                status: 0, // User not found
                user_id: null,
                user_type: null,
                message: 'Invalid email or password',
            });
        }
    } catch (error) {
        console.error('Error during login:', error.message);
        res.status(500).json({ status: 0, message: 'Internal Server Error' });
    }
};




const register =  async (req, res) => {
    res.status(201).json({
        message: 'User registered successfully'
      });

}
;

const trummp =  async (req, res) => {
    res.status(201).json({
        message: 'Ucicd runned successully'
      });

}
;

module.exports = { createUser,register,trummp,userLogin };
