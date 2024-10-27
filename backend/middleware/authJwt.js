// middlewares/authJwt.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) return res.status(403).send({ message: 'No token provided!' });

  jwt.verify(token, 'secret-key', (err, decoded) => {
    if (err) return res.status(401).send({ message: 'Unauthorized!' });
    req.userId = decoded.id;
    req.roles = decoded.roles;
    next();
  });
};

const isResearcher = (req, res, next) => {
  if (req.roles.includes('researcher')) {
    next();
  } else {
    res.status(403).send({ message: 'Require Researcher Role!' });
  }
};

module.exports = { verifyToken, isResearcher };