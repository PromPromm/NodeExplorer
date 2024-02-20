const express = require("express")
const BookModel = require("../models/book")

const bookRoute = express.Router()

bookRoute.get('/', (req, res) => {
    BookModel.find({})
        .then((books) => {
            res.status(200).send(books)
        }).catch ((err) => {
            console.log(err)
            res.status(500).send(err.message)
        })
})

bookRoute.get('/:id', (req, res) => {
    const id = req.params.id

    BookModel.findById(id)
        .then((book) => {
            res.status(200).send(book)
        }) .catch((err) => {
            res.status(404).send(err,message)
        })
})

bookRoute.post('/', (req, res) => {
    const book = req.body
    console.log(book)

    BookModel.create(book)
        .then((book) => {
            res.status(201).send({
                message: 'Book added successfully',
                data: book
            })
        }) .catch((err) => {
            console.log(err)
            res.status(400).send(err.message)
        })
})

bookRoute.put('/:id', (req, res) => {
    const id = req.params.id
    const book = req.body
    
    BookModel.findByIdAndUpdate(id, book, {new: true})
        .then((book) => {
            res.status(200).send(book)
        }) .catch((err) => {
            res.send(400).send(err.message)
        })

})

bookRoute.delete('/:id', (req, res) => {
    const id = req.params.id
    
    BookModel.findByIdAndDelete(id)
        .then(() => {
            res.status(200).send({
                message: "Deletion Successful",
                data: ""
            })
        }) .catch((err) => {
            res.send(400).send(err.message)
        })
})

module.exports = {bookRoute}
