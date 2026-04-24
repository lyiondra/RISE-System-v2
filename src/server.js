require('dotenv').config();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Load environment variables from the root directory .env file
require('dotenv').config({ path: path.join(__dirname, '../.env') });
if (process.env.NODE_ENV === 'production') {
  // Use MongoDB connection string from production environment variable
  const uri = process.env.MONGODB_URI;
} else {
  // Use local MongoDB connection string from development environment variables
  const uri = process.env.DEV_MONGODB_URI;
}

// Connect to MongoDB using Mongoose
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));


  // Use local MongoDB connection string from development environment variables
  const uri = process.env.DEV_MONGODB_URI;


// Serve static files from the src/ui folder
app.use(express.static(path.join(__dirname, 'ui')));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});