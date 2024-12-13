const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../config/database')


const User = sequelize.define('User', {
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'inactive',
    },
  }, {
    tableName: 'users', // Map this model to your existing users table
    timestamps: false, // Set to true if your table includes `createdAt` and `updatedAt`
  });
  
  module.exports = User;