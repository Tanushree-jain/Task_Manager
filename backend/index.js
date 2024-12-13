const sequelize = require('./config/database')

sequelize.authenticate()
  .then(() => console.log('Database connected!'))
  .catch(err => console.error('Error connecting to database:', err));