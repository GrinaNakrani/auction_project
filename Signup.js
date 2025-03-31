const mongoose = require('mongoose');

const SignupSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    Roll_no: {
        type: Number,
        required: true,
        unique: true
    },
    DOB: {
        type: Date,
        required: true
    },
    College_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
    });

    const SignupModel = mongoose.model('Signup', SignupSchema);
    module.exports = SignupModel;