const User = require('../models/users.model')

exports.signup = async(req, res) => {
    const { fullname, username, email, password, status } = req.body;

    try {
      const user = await User.create({ fullname, username, email, password, status });
      res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};