// config/db.js
const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables from .env

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("❌ Error connecting to MySQL:", err.message);
  } else {
    console.log("✅ Connected to MySQL Database");
  }
});

module.exports = db;
