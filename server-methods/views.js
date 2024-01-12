const fs = require("fs")
const path = require("path")

const bookDbPath = path.join(__dirname, 'db', 'books.json')

function getBooks(req, res) {
    //asynchronous method
    fs.readFile(bookDbPath, 'utf8', (err, books) => {
        if (err) {
            console.log(err)
            res.writeHead(500)
            res.end('Internal Server Error')
        } 
        res.writeHead(200)
        res.end(books)
    })

    //synchronous method
    // res.writeHead(200)
    // res.end(JSON.stringify(booksDB))
}

function addBook(req, res){
    const body = []
    req.on('data', (chunk) => body.push(chunk))
    
    req.on('end', () => {
        const parsedData = JSON.parse(Buffer.concat(body).toString('utf-8'))
        
        // asynchronous method
        fs.readFile(bookDbPath, 'utf-8', (err, books) => {
            if (err) {
                console.log(err)
                res.writeHead(500)
                res.end('An error occured')
            }
            const parsedBooks = JSON.parse(books)
            const allBooks = [...parsedBooks, parsedData]
            
            fs.writeFile(bookDbPath, JSON.stringify(allBooks), (err) => {
                if (err) {
                    console.log(err)
                    res.writeHead(500)
                    res.end('An error occured')
                } res.end('Book successfully added')
            })
        })

        //synchronous method
        // const allBooks = [...booksDB, parsedData]
        // fs.writeFileSync(bookDbPath, JSON.stringify(allBooks))
        // res.end(JSON.stringify({message: "Book successfully added"}))
    })
}

function updateBook(req, res) {
    const body = []

    req.on('data', (chunk) => body.push(chunk))
    
    req.on('end', () => {
        const parsedData = JSON.parse(Buffer.concat(body).toString('utf-8'))
        const bookToUpdate = parsedData.id

        //asynchronous method
        fs.readFile(bookDbPath, 'utf-8', (err, books) => {
            if (err) {
                console.log(err)
                res.writeHead(500)
                res.end("An error occured")
            } const oldBooks = JSON.parse(books)
            const indexToUpdate = oldBooks.findIndex(book => book.id === bookToUpdate)

            if (indexToUpdate === -1) {
                res.writeHead(404)
                res.end(JSON.stringify({message: "Book does not exist. Not found!"}))
            } const updatedBook = {...oldBooks[indexToUpdate], ...parsedData}
            oldBooks[indexToUpdate] = updatedBook

            fs.writeFile(bookDbPath, JSON.stringify(oldBooks), (err) => {
                if (err) {
                    console.log(err)
                    res.writeHead(500)
                    res.end("Internal server error")
                } res.end(JSON.stringify({message: "Book updated succesfully"}))
            })
        })

        //synchronous method
        // const indexToUpdate = booksDB.findIndex(book => book.id === bookToUpdate)

        // if (indexToUpdate === -1) {
        //     res.writeHead(404)
        //     res.end(JSON.stringify({message: "Book does not exist"}))
        // }
        // const updatedBook = {...booksDB[indexToUpdate], ...parsedData}
        // booksDB[indexToUpdate] = updatedBook

        // fs.writeFileSync(bookDbPath, JSON.stringify(booksDB))
        // res.end("Book updated!")

    })
}

function deleteBook(req, res) {
    const body = []

    req.on("data", (chunk) => body.push(chunk))

    req.on("end", () => {
        const parsedData = JSON.parse(Buffer.concat(body).toString('utf-8'))
        const bookId = parsedData.id

        //asynchronous
        fs.readFile(bookDbPath, 'utf-8', (err, books) => {
            if (err) {
                console.log(err)
                res.writeHead(500)
                res.end(JSON.stringify({message: "Internal Server Error"}))
            } const parsedBooks = JSON.parse(books)

            const indexToDelete = parsedBooks.findIndex(book => book.id === bookId)

            if (indexToDelete === -1) {
                res.writeHead(404)
                res.end('Book not found!')
            } 
            parsedBooks.splice(indexToDelete, 1)

            fs.writeFile(bookDbPath, JSON.stringify(parsedBooks), (err) => {
                if (err) {
                    console.log(err)
                    res.writeHead(500)
                    res.end("Internal Server Error")
                }  res.end(JSON.stringify({message: 'Book Deleted'}))
            })
        })
        // synchronous
        // const indexToDelete = booksDB.findIndex(book => book.id === bookId)
        // if (indexToDelete === -1) {
        //     res.writeHead(404)
        //     res.write(JSON.stringify({message: "Book does not exist. NOt found!"}))
        // } booksDB.splice(indexToDelete, 1)

        // fs.writeFileSync(bookDbPath, JSON.stringify(booksDB))
        // res.end("Book deleted")
    })
}

module.exports = {addBook, getBooks, deleteBook, updateBook}
