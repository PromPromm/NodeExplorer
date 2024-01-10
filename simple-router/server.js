const http = require("http")

const {books, authors} = require("./fixtures")

const HOSTNAME = "localhost"
const PORT = 4000

const server = http.createServer(requestHandler)

function requestHandler(req, res) {
    console.log(req.url)

    switch (req.url) {
        case '/books':
            res.writeHead(200)
            res.end(JSON.stringify(books));
            break;
        case '/authors':
            res.writeHead(200)
            res.end(JSON.stringify(authors));
            break;
        default:
            res.writeHead(404)
            res.end("Request not supported")
    }
    res.end()
}

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}`)
})
