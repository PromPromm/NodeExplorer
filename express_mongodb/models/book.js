const mongoose = require("mongoose")

const Schema = mongoose.Schema

const BookModel = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        max: [2024, 'Year must not be more than the current year']
    },
    isbn: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('books', BookModel)
