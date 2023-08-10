const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Todo-List', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family : 4,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
};

module.exports = connectDB;