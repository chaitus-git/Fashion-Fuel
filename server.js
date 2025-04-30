const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// MongoDB connection
const MONGO_URI = 'your_mongodb_uri_here';
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// API route for contact form
app.post('/api/contact', (req, res) => {
  console.log('Contact form submission:', req.body);
  res.json({ message: 'Message received. Thank you!' });
});

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'public/contact.html')));
app.get('/products', (req, res) => res.sendFile(path.join(__dirname, 'public/products.html')));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
