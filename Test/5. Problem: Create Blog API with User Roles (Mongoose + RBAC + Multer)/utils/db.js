const mongoose = require('mongoose');   

async function connectDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/MyDB');
        console.log('DB connected');
    } catch (error) {
        console.error('Error while connecting to DB', error.message);
    }
}

module.exports = { connectDB };
