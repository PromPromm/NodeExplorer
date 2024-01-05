//import functions from local module
const myMathLib = require("./my-math-lib")
const userModule = require("./user")

let sum = myMathLib.add(200, 20)
let sub = myMathLib.sub(200, 20)
let mul = myMathLib.mul(200, 20)
let div = myMathLib.div(200, 20)
let username = userModule("Jane Doe")

console.log(sum)
console.log(sub)
console.log(mul)
console.log(div)
console.log(username)