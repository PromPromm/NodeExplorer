const http = require("http")

const PORT = 8000
const HOSTNAME = 'localhost'

function requestListener(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.writeHead(200)
    res.write(JSON.stringify({message: "Hello There"}))
    res.end()
}

const server = http.createServer(requestListener)
server.listen(PORT, HOSTNAME, () => console.log(`Server running on http://${HOSTNAME}:${PORT}`))
