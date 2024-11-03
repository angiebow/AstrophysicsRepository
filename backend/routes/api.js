const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUser } = require('../controllers/authController');
const { getItems, addItem, updateItem, deleteItem } = require('../controllers/itemController');
const auth = require('../middleware/authJwt');

// Auth routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/user', auth, getUser);

// CRUD routes
router.get('/items', auth, getItems);
router.post('/items', auth, addItem);
router.put('/items/:id', auth, updateItem);
router.delete('/items/:id', auth, deleteItem);

module.exports = router;