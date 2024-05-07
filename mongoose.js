// import mongoose 
let mongoose = require('mongoose');

// package to process 
require('dotenv').config();

//conncet to the MongoDB database using the URI from the environment variables
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));