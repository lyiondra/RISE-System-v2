const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    unique: true,
    required: true
  },
  status: {
    type: String,
    default: 'available'
  }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;