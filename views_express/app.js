const express = require("express")
const parser = require("body-parser")

const bookRoute = require('./routes/books')

const PORT = 5000
const app = express()

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static('public'))
app.use(parser.json())

app.use('/books', bookRoute)

app.get('/', (req, res) => {
    res.render('index', {name: "Promise", age: 9})
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
