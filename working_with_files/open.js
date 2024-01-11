const fs = require("fs")
const path = require("path")

const poemFilePath = path.join(__dirname, "files", "countries.json")

// console.log(__dirname) // __dirname gives the path to the directory this open.js file is in
// console.log(__filename) // __dirname gives the path of this file



// Opening a file asynchronously
fs.open(poemFilePath, 'r', (err, fd) => {
    if (err) {
        console.log(`An error occured while opening the file: ${err}`)
        return
    } // console.log(fd) // returns a number
    // the filedata fd from the opened file is passed to the readfile method to convert to utf8
    fs.readFile(fd, 'utf-8', (err, data) => {
        if (err) {
            console.log(`An error occured while reading the file: ${err}`)
            return
        } console.log(data)
        return
    })
    
})

// Opening a file synchronously
const poemFd = fs.openSync(poemFilePath, 'r')
const poemData = fs.readFileSync(poemFd, 'utf-8')
console.log(poemData)
