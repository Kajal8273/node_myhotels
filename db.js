const mongoose = require('mongoose');

// Create connection
const mongoURL = 'mongodb://127.0.0.1:27017/hotels';
mongoose.connect(mongoURL);

// Connection object
const db = mongoose.connection;

// Define listeners
db.on('connected', () => {
    console.log('Connected to MongoDB server');
});
db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});
db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

module.exports = db;
