const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const researchRoutes = require('./routes/research');
const { verifyToken } = require('./middleware/authJwt');

const app = express();
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:8080',
}));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/astrophysics')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/auth', authRoutes);
app.use('/api/research', verifyToken, researchRoutes);

// Sample API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;