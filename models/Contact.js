const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide name']
    },
    email: {
        type: String,
        required: [true, 'Must provide email']
    },
    message: {
        type: String,
        default: 'Someone new is trying to contact you!'
    }
})

module.exports = contactSchema
