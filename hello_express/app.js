const express = require("express")

const PORT = 8000

const app = express()

app.get('/', (req, res) => {
    res.status(200)
    //res.send("Hello World of Express")
    res.json({
        message: "Hello the world of express"
    })
})

app.listen(PORT, () => {
    console.log(`Server started successfully at http://localhost:${PORT}`)
})
