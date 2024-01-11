const fs = require('fs')
const path = require("path")

rmFilePath = path.join(__dirname, "files", "delete.txt")

//asynchronous method
fs.rm(rmFilePath, (err) => {
    if (err) {
        console.log(err)
        return
    } {
        console.log("File deleted successfully")
    }
})

//synchronous method
// fs.rmSync(rmFilePath)
