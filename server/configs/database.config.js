// Import Mongoose
import mongoose from 'mongoose';
import config from '../config.js'; // Import the MongoDB URI from config

const mongodbUri = config.mongodbUri;

// Connect to MongoDB
mongoose.connect(mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
