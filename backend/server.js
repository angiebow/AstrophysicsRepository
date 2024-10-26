const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/vue-express-app');

// Define routes
app.use('/api', require('./routes/api'));

// Start server
const PORT = process.env.PORT || 5001; // Change to a different port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));