const fs = require("fs")
const path = require("path")

const poemFilePath = path.join(__dirname, "files", "countries.json")

//asynchronous method
fs.stat(poemFilePath, (err, stats) => {
    if (err) {
        console.log(`An error occured when reading file stats ${err}`)
        return
    } {
        console.log(stats)
        console.log(stats.isDirectory()) //check if the path is a directory
        console.log(stats.isFile()) //check if the path is a file
        console.log(stats.size) //size of file or folder
    }
})

//synchronous method
const poemFileStats = fs.statSync(poemFilePath)
console.log(poemFileStats)
console.log(poemFileStats.isDirectory())
console.log(poemFileStats.isFile())
console.log(poemFileStats.size)