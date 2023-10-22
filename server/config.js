// config.js
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  mongodbUri: process.env.MONGODB_URI,
  port: process.env.PORT,
  secretKey: process.env.SECRET_KEY,
};
