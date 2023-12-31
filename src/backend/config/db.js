const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('Successfully connected to MongoDB.');
    });
};

module.exports = connectDB;
