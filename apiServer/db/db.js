require('dotenv').config();
const { Pool } = require('pg');

// Configure the database connection pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
  ssl: {
    rejectUnauthorized: false, // This accepts self-signed certificates
  },
});

module.exports = pool;
