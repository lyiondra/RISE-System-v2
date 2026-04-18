require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB (Atlas string will go in .env)
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("RISE Database Connected Successfully"))
  .catch(err => console.log("Database Connection Error:", err));
// 1. Define the "Blueprint" (Schema)
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    isbn: String,
    condition: String,
    price: Number,
    createdAt: { type: Date, default: Date.now }
});

const Book = mongoose.model('Book', bookSchema);

// 2. The "Get" Route (Load books from the cloud)
app.get('/api/books', async (req, res) => {
    try {
        const books = await Book.find().sort({ createdAt: -1 });
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 3. The "Post" Route (Save a new book)
app.post('/api/books', async (req, res) => {
    try {
        const newBook = new Book(req.body);
        await newBook.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));