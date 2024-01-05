const process = require("process")

function displayUserDetails(name, age) {
    console.log(`Your name is ${name} and age is ${age}`)
}

function parseArgs(args){
    slicedArgs = args.slice(2)
    return slicedArgs
}

const args = process.argv
const processArgs = parseArgs(args)
console.log(processArgs)

const userDetails = displayUserDetails(processArgs[0], processArgs[1])
