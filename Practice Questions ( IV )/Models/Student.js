const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required']
        },

        age: {
            type: Number,
            required: [true, 'Age is required'],
            min: [6, 'Age must be a greater than Six']
        },

        class: {
            type: Number,
            required: [true, 'Class is required'],
        },

        fee: {
            type: Number,
            required: [true, 'Fee is required']
        },

        address: {
            city: {
                type: String,
                required: [true, 'City is required']
            },
            state: {
                type: String,
                required: [true, 'State is required']
            }         
        }
    },
    {
        timestamps: true
    }
);
const Student = mongoose.model('Student', studentSchema);
module.exports = Student;

    
