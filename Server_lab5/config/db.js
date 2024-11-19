const mongoose = require('mongoose');

const local = "mongodb+srv://quyenvuong1408:FS4QTP6m7koAZMmP@cluster0.jhfb0.mongodb.net/lab5_md19304";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
