// models/userModel.js
const pool = require('../db/db');

// Function to call the PostgreSQL `create_user` function
const createUserInDB = async (first_name, last_name, email, password, usertype) => {
  const query = `
    SELECT * FROM jf.create_user($1, $2, $3, $4, $5);
  `;
  const values = [first_name, last_name, email, password, usertype];
  const result = await pool.query(query, values);
  return result.rows[0];
};


const userSignin = async ( email, password) => {
  const query = `
    SELECT * FROM jf.user_login($1, $2);
  `;
  const values = [ email, password];
  const result = await pool.query(query, values);
  console.log('result', result.rows[0]);
  
  return result.rows[0];
};


module.exports = {
  createUserInDB,
  userSignin
};