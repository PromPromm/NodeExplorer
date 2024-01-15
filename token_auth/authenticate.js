require("dotenv").config()

//console.log(process.env.token)
const API_KEY = process.env.token

function authenticate(req, res) {
    return new Promise((resolve, reject) => {
        let token = req.headers.authorization
        if (!token) {
            reject("No token in header")
        }token = token.split(" ")[1]
        if (token !== API_KEY) {
            reject("Invalid token")
        } resolve()

    })
}

module.exports = {authenticate}
