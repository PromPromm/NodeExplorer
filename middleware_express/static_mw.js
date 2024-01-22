const express = require("express")

const PORT = 5000
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.status(200)
    res.send('Hello World')
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
