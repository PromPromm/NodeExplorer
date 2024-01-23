const express = require("express")

const bookRouter = express.Router()

const books = [
    {
        title: 'War and Peace',
        id: 1,
        year: 1869,
    },
    {
        title: 'The Great Gatsby',
        id: 2,
        year: 1925,
    },
    {
        title: 'The Catcher in the Rye',
        id: 3,
        year: 1951,
    },
]

bookRouter.get('/', (req, res) => {
    res.json(books)
})

bookRouter.get('/:id', (req, res) => {
    const id = req.params.id
    const book = books.find(book => book.id === parseInt(id))
    if (!book) {
        res.status(404).end('Book Not Found')
    } else {
        res.json(book)
    }
})

bookRouter.post('/', (req, res) => {
    const book = req.body
    books.push(book)
    res.json(book)
})

bookRouter.put('/:id', (req, res) => {
    const id = req.params.id
    const body = req.body
    const bookIndex = books.findIndex(book => book.id === parseInt(id))
    if (bookIndex === -1) {
        res.status(404).end('Book Not Found')
        return
    }
    books[bookIndex] = body
    res.json(body)
})

bookRouter.delete('/:id', (req, res) => {
    const id = req.params.id
    const bookIndex = books.findIndex(book => book.id === parseInt(id))
    if (bookIndex === -1) {
        res.status(404).end('Book Not Found')
        return
    }
    books.splice(bookIndex, 1)
    res.json('Book deleted')
})

module.exports = bookRouter
