const parser = require("body-parser")
const logger = require("morgan")
const express = require("express")

const PORT = 5000

const app = express()

app.use(logger('dev'))

app.use(parser.json())

app.get('/', (req, res) => {
    res.status(200)
    res.json('Hello World')
})

app.use((req, res, next) => {
    const apiKey = req.body.apiKey
    if (apiKey) {
        next()
    } else {
        res.status(401).send('Unauthorised')
    }
})

app.get('/users', (req, res) => {
    res.status(200)
    res.json([
         {
        "id": 1,
        "name": "Yemi Olanrewaju"
    },
    {
        "id": 2,
        "name": "Oluwasegun Olaoluwa"
    }
    ])
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
