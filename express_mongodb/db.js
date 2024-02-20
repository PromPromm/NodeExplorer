const mongoose = require("mongoose")
require('dotenv').config()

const connectionURL = process.env.MONGODB_CONNECTION_URL

function connectToMongoDB() {
    mongoose.connect(connectionURL)

    mongoose.connection.on("connected", () => {
        console.log('Connection successful')
    })

    mongoose.connection.on("Error", () => {
        console.log(err)
        console.log("An error occured")
    })
}

module.exports = {connectToMongoDB}
