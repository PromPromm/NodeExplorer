const bookController = require("../controllers/book_controller")
const express = require('express')

const BookRouter = express.Router()

BookRouter.get('/', bookController.getAllBooks)
BookRouter.post('/', bookController.addBook)
BookRouter.put('/:id', bookController.updateBook)
BookRouter.delete('/:id', bookController.deleteBook)

module.exports = BookRouter
