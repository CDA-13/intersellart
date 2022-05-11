const mongoose = require('mongoose');

const userSchema = mongoose.schema({
    firstname: {type: String, required: true, unique: false},
    lastname: {type: String, required: true, unique: false},
    email: {type: String, required: true, unique: true},
    pseudo: {type: String, required: false, unique: true},
    password: {type: String, required: true, unique: false}
});

module.exports = mongoose.model('user', userSchema);