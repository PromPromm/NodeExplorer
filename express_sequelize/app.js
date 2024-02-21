const express = require('express')
const BookRouter = require('./routes/book')
const bodyParser = require('body-parser')
require('dotenv').config()

const PORT = process.env.PORT

const app = express()

app.use(bodyParser.json())

app.use('/books', BookRouter)

app.get('/', (req, res) => {
    res.send('Welcome to the book api')
})

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        error: err.message
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
