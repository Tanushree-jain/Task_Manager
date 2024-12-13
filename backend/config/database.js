const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'root@123', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
