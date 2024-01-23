const express = require("express")
const parser = require("body-parser")

const bookRoute = require('./routes/books')
const authorRoute = require('./routes/authors')

const PORT = 5000
const app = express()

app.use(express.static('public'))
app.use(parser.json())

app.use('/books', bookRoute)
app.use('/authors', authorRoute)

app.get('/', (req, res) => {
    res.end('Home Page')
})

app.get('/about', (req, res) => {
    res.end('About Page')
})

app.get('/contact', (req, res) => {
    res.end('Contact Page')
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

