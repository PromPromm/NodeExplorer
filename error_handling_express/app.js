const express = require("express")
const fsPromises = require("fs").promises

const PORT = 3000
const app = express()

app.use(express.static('public'))
app.use(express.json())

// synchronous error automatically handled by express
app.get('/', (req, res) => {
    throw new Error('Hello Error')
})

//asynchronous error
app.get('/file', async(req, res) => {
    const file = await fsPromises.readFile('./no-such-file.txt')
    res.sendFile(file)
})

app.get('/text', async(req, res, next) => {
    try {
        const file = await fsPromises.readFile('./no-such-file.txt')
        res.sendFile(file)
    } catch (error) {
        error.type = 'Not Found'
        next(error)
    }
})

app.get('/user', async(req, res, next) => {
    try{
        const file = await fsPromises.readFile('./no-such-file.txt')
        res.sendFile(file)
    } catch (error) {
        error.type = 'Redirect'
        next(error)
    }
})

// handle asynchronous error using error middleware
app.use((error, req, res, next) => {
    console.log('Error handling middleware called')
    console.log('Path: ', req.path)
    console.log('Error: ', error)

    if (error.type == 'Redirect') {
        res.redirect('error.html')
    } else if (error.type == 'Not Found') {
        res.status(404).send('File Not Found')
    } else {
        res.status(500).send(error)
    }
    next()
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
