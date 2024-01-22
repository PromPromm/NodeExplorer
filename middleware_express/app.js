const express = require("express")

const PORT = 5000

const app = express()

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})

app.get('/', (req, res) => {
    res.status(200)
    res.send('Hello World')
})

app.use((req, res, next) => {
    const apiKey = req.query.apiKey
    if (apiKey) {
        next()
    } else {
        res.status(401).send('Unauthorized')
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
    console.log(`Server is running on http://localhost:${PORT}`)
})
