//explore functions od the os module
//You can hover on the function in your code editor to see what it does

const os = require("os")

const userDetails = os.userInfo()
console.log(userDetails)

const hostName = os.hostname()
console.log(hostName)

const platform = os.platform()
console.log(platform)

const eol = os.EOL
console.log(eol)

const memory = os.freemem()
console.log(memory)

const totalMem = os.totalmem()
console.log(totalMem)

const arch = os.arch()
console.log(arch)

const cpu = os.cpus()
console.log(cpu)
