const express = require("express")
const {connectToMongoDB} = require("./db")
const {bookRoute} = require('./routes/book')
require("dotenv").config()

const PORT = process.env.PORT

const app = express()

//connect to MongoDB instance
connectToMongoDB()

app.use(express.json())

app.use('/books', bookRoute)

app.get('/', (req, res) => {
    res.send('Welcome to the home page')
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

