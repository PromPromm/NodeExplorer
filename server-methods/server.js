const fs = require("fs")
const path = require("path")
const http = require("http")
const {getBooks, addBook, updateBook, deleteBook} = require("./views")

const PORT = 5000
const HOSTNAME = "localhost"

const bookDbPath = path.join(__dirname, 'db', 'books.json')

function requestHandler(req, res) {
    if (req.url === '/books' && req.method === 'GET'){
        getBooks(req, res)
    } else if (req.url === '/books' && req.method === 'POST'){
        addBook(req, res)
    } else if (req.url === '/books' && req.method === 'PUT'){
        updateBook(req, res)
    } else if(req.url === '/books' && req.method === 'DELETE'){
        deleteBook(req, res)
    }
}

const server = http.createServer(requestHandler)
server.listen(PORT, HOSTNAME, () => {
    booksDB = JSON.parse(fs.readFileSync(bookDbPath, 'utf8')) // reads the file synchronously and parses it
    console.log(`Server is now running on http://${HOSTNAME}:${PORT}`)
})
