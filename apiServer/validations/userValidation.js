const Joi = require('joi');

// Joi schema for user creation
const createUserSchema = Joi.object({
    first_name: Joi.string().min(2).max(50).required(),
    last_name: Joi.string().min(2).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(), // Password will be hashed later
    usertype: Joi.number().integer().min(0).max(1).required(),
});

const validate = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({
            status: 0,
            message: error.details[0].message,
        });
    }
    next();
};

module.exports = { 
    createUserSchema,
    validate





 };