const express = require('express');
const mongoose = require('mongoose');
const StudentRouter = require('../routes/StudentRoutes');
const app = express();
app.use(express.json());

function connectDB() {
    mongoose
        .connect('mongodb://localhost:27017/StudentDB')
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((err) => {
            console.error('Error connecting to MongoDB:', err);
        });
}

app.use('/students', StudentRouter);    

app.get('/', (req, res) => {
    res.send('Welcome to the Student Management System');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    connectDB();
}
);
