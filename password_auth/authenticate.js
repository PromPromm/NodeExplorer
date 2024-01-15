const fs = require("fs")
const path = require("path")

const userPath = path.join(__dirname, 'db', 'users.json')

function getAllUsers(){
    return new Promise((resolve, reject) =>
    fs.readFile(userPath, 'utf-8', (err, users) => {
        if (err) {
            reject(err)
        } resolve(JSON.parse(users))
    }))
}

function authenticate(req, res) {
    return new Promise((resolve, reject) => {
        const body = []
        req.on("data", (chunk) => body.push(chunk))
        req.on('end', async () => {
            const loginDetails = Buffer.concat(body).toString()

            if (!loginDetails) {
                reject("No username or password provided")
            } 
            else {const parsedDetails = JSON.parse(loginDetails)
            const users = await getAllUsers()
            //console.log(users)
            const foundUser = users.find((user) => user.username === parsedDetails.username)
            if (!foundUser) {
                reject("User not found! Sign up please")
            } 
            if (foundUser.password !== parsedDetails.password) {
                reject("Incorrect password")
                }
                resolve()
            }
            
            
        })
    })
}

module.exports = {
    authenticate
}
