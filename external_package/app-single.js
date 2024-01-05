// Importing specific functions from the whole package

// const {mean, median} = require("mathjs")
import {mean, median} from "mathjs"

let meanResult = mean(10, 10)
let medianResult = median(2, 3, 4, 8)

console.log(meanResult)
console.log(medianResult)
