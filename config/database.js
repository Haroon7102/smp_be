require('dotenv').config(); // Load environment variables from .env file
const { Sequelize } = require('sequelize');

// Create a new Sequelize instance with environment variables
const sequelize = new Sequelize(
    process.env.DB_NAME, // Database name
    process.env.DB_USER, // Database username
    process.env.DB_PASS, // Database password
    {
        host: process.env.DB_HOST, // Database host
        dialect: 'mysql',           // Database dialect
    }
);

module.exports = sequelize;
