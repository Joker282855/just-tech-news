// import the Seqeulize package form node .js
const Sequelize = require('sequelize');

// make the actual connectoin to the database
const sequelize = new Sequelize('just_tech_news_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;

