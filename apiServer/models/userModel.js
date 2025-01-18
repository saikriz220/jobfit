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

module.exports = {
  createUserInDB,
};