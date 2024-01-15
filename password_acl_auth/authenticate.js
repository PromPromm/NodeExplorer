const fs = require("fs")
const path = require("path")

const userPath = path.join(__dirname, "db", "users.json")

function getAllUsers() {
    return new Promise((resolve, reject) => {
       fs.readFile(userPath, (err, users) => {
        if (err) {
            reject(err)
        } resolve(JSON.parse(users))
       })
    })
}

function authenticate(req, res, roles){
   return new Promise((resolve, reject) => {
    const body = []

    req.on("data", (chunk) => body.push(chunk))
    req.on("end", async() => {
        const loginDetails = Buffer.concat(body).toString()
        if (!loginDetails) {
            reject(" Enter password and username")
        }
            const {user: parsedDetails, book} = JSON.parse(loginDetails)
            const users = await getAllUsers()
            const userExist = users.find((user) => parsedDetails.username === user.username)
            if (!userExist) {
                reject("User does not exist")
            } else {
                if (userExist.password !== parsedDetails.password) {
                reject("Incorrect Passowrd")
            } 
            if (!roles.includes(userExist.role)) {
                reject("Not authorized")
            } resolve(book)
            }
        
    })
   })
}

module.exports = {
    authenticate
}
