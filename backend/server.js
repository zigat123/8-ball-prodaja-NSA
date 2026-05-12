const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = 'mongodb+srv://zigat123:zigat123@cluster0.9kefglw.mongodb.net/?appName=Cluster0';
mongoose.connect(mongoURI)
.then(() => console.log('MongoDB Atlas connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Schemas
const productSchema = new mongoose.Schema({
  title: String,
  category: String,
  price: Number,
  image: String,
  description: String,
  badge: String
});

const Product = mongoose.model('Product', productSchema);

const orderSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  payment: String,
  items: Array,
  total: Number,
  createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

// Routes
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(404).json({ error: 'Product not found' });
  }
});

app.post('/api/orders', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json({ message: 'Order saved successfully', order });
  } catch (error) {
    console.error('Error saving order:', error);
    res.status(500).json({ error: 'Failed to save order' });
  }
});

// Seed endpoint (One-time use to populate DB)
app.post('/api/seed', async (req, res) => {
  try {
    const products = req.body;
    await Product.deleteMany({}); // Clear existing
    const inserted = await Product.insertMany(products);
    res.json({ message: 'Database seeded!', count: inserted.length });
  } catch (error) {
    res.status(500).json({ error: 'Seeding failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});