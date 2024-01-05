const process = require("process")

const nodeVersion = process.versions
console.log(nodeVersion)

const nodeRelease = process.release
console.log(nodeRelease)

// process.exit(0)

process.stdout.write("Hello World\n")

const args = process.argv
console.log(args)

const env = process.env
console.log(env)

const cwd = process.cwd()
console.log(cwd)
