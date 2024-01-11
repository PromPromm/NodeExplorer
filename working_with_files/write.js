const fs = require("fs")
const path = require("path")

const newFilePath = path.join(__dirname, "files", "new.txt")
const content = "This is a new file"

// fs.writeFile(newFilePath, content, (err) => {
//     if (err) {
//         console.log(err)
//         return
//     } console.log("File has been created succesfully")
// } )

const newLine = '\nThis is a new line'
fs.appendFile(newFilePath, newLine, (err) => {
    if (err) {
        console.log(err)
        return
    } {
        console.log("File appended successfully")
    }
})
