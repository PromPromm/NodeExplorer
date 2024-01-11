const fs = require("fs")
const path = require("path")

const poemFilePath = path.join(__dirname, "files", "poem.txt")

// asynchronous method
fs.readFile(poemFilePath, 'utf-8', (err, data) => {
    if (err) {
        console.log(`An error occured while reading the file: ${err}`)
        return
    } console.log(data)
})

//synchronous method
const countriesFilePath = path.join(__dirname, "files", "countries.json")
const countriesData = fs.readFileSync(countriesFilePath, 'utf-8')
console.log(countriesData)
