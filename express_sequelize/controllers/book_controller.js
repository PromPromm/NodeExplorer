const db = require("../models")

const BookModel = db.books

async function getAllBooks(req, res) {
    try {
        const books = await BookModel.findAll()
        res.status(200).json(books)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function addBook(req, res) {
    const bodyInfo = req.body

    try{
        const book = await BookModel.create(bodyInfo)
        res.status(201).json(
            {
                message: "Book added successfully",
                data: book
            }
        )
    } catch (err) {
        res.status(400).json(err)
    }
}

async function updateBook(req, res) {
    const id = req.params.id
    const body = req.body

    try{
        const book = await BookModel.update(body, {
            where: {
                id: id
            }
        })
        res.status(200).json({
            message: "Book updated successfully",
            data: book
        })
    } catch(err) {
        res.status(500).json(err.message)
    }
}

async function deleteBook(req, res) {
    const id = req.params.id
    try{
        const book = await BookModel.destroy(
            {
                where: {
                    id: id
                }
            }
        )
        res.status(200).json({
            message: "Book Deleted successfully"
        })
    } catch(err) {
        res.status(400).json(err.message)
    }
}

module.exports = {
    getAllBooks,
    addBook,
    updateBook,
    deleteBook
}
