const express = require("express")

const PORT = 6000
const app = express()

app.use(express.static('public'))
app.use(express.json())

app.get('/', (req, res) => {
    res.end('Home page')
})

app.get('/about', (req, res) => {
    res.end('About Page')
})

app.get('/contact', (req, res) => {
    res.end('Contact page')
})

app.post('/upload', (req, res) => {
    res.end('Uploading file...')
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
