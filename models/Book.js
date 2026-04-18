const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  
  // RISE-002: Strict ISBN Validation
  isbn: { 
    type: String, 
    required: true, 
    validate: {
      validator: function(v) {
        return /^\d{10}(\d{3})?$/.test(v);
      },
      message: props => `${props.value} is not a valid 10 or 13 digit ISBN!`
    }
  },
  
  edition: String, 
  condition: String, 
  price: { type: Number, required: true },
  tags: [String], 
  imageUrl: String, 
  stockCount: { type: Number, default: 1 },

  // --- SPRINT 2 ADDITION START ---
  status: {
    type: String,
    enum: ['In Stock', 'Ordered', 'Sold'], 
    default: 'In Stock'
  }
  // --- SPRINT 2 ADDITION END ---
});

module.exports = mongoose.model('Book', BookSchema);
