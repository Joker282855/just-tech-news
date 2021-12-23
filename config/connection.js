// import the Seqeulize package form node .js
const Sequelize = require('sequelize');

// importing package that protects password and account information
require('dotenv').config();

// make the actual connectoin to the database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;

