// app.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/astrophysics', { useNewUrlParser: true, useUnifiedTopology: true });