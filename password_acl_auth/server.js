const fs = require("fs")
const path = require("path")
const http = require("http")
const {getBooks, addBook, updateBook, deleteBook} = require("./views")
const {authenticate} = require("./authenticate")

const PORT = 5000
const HOSTNAME = "localhost"

const bookDbPath = path.join(__dirname, 'db', 'books.json')

const requestHandler = async function (req, res) {
    res.setHeader("Content-Type", "application/json");

    if (req.url === '/books' && req.method === 'GET'){
        authenticate(req, res, ["admin", "reader"])
            .then(() => {
                getBooks(req, res)
            }).catch((err) => {
                res.statusCode = 401;
                res.end(JSON.stringify({
                    error: err
                }))
            })
    } else if (req.url === '/books' && req.method === 'POST'){
        authenticate(req, res, ["admin"])
            .then((book) => {
                addBook(req, res, book)
            }).catch((err) => {
                res.statusCode = 401;
                res.end(JSON.stringify({
                    error: err
                }))
            })
            
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