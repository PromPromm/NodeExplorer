const http = require("http")

const HOSTNAME = "localhost"
const PORT = 8000

function requestHandler(req, res) {
    // console.log(req)
    res.writeHead(200)
    res.write("My name is Promise Anuoluwa Falaye")
    res.write("\nThis is my first node.js server")
    res.end("\nHello from the server")
}

const server = http.createServer(requestHandler)

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server successfully started on http://${HOSTNAME}:${PORT}`)
})
