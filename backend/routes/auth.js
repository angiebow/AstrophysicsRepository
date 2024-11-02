// routes/auth.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

router.post('/register', async (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 8);
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
    roles: ['researcher'],
  });
  await user.save();
  res.status(201).send({ message: 'User registered successfully!' });
});

router.post('/login', async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(404).send({ message: 'User not found.' });

  const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
  if (!passwordIsValid) return res.status(401).send({ accessToken: null, message: 'Invalid Password!' });

  const token = jwt.sign({ id: user._id, roles: user.roles }, 'secret-key', { expiresIn: 86400 });
  res.status(200).send({ id: user._id, username: user.username, email: user.email, roles: user.roles, accessToken: token });
});

module.exports = router;