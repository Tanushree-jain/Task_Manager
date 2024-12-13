const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'root@123', {
  host: 'localhost',
  dialect: 'postgres',
});


sequelize.authenticate()
  .then(() => console.log('Database connected!'))
  .catch(err => console.error('Error connecting to database:', err));
  
module.exports = sequelize;
