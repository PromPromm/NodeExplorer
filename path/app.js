// Explore the path module
// You should replace the paths with valid paths on your computer as arguments to the functions so you can see it work
const path = require("path")

const separator = path.sep
console.log(separator)

const baseName = path.basename('C:/Users/HP/VScode/altschool_nodejs/path/package.json')
console.log(baseName)

const dirName = path.dirname('C:/Users/HP/VScode/altschool_nodejs/path/package.json')
console.log(dirName)

const extName = path.extname('C:/Users/HP/VScode/altschool_nodejs/path/package.json')
console.log(extName)

const joinPath = path.join('Altschool', 'Backend_Engineering', 'nodejs', 'path')
console.log(joinPath)

const cwd = path.resolve()
console.log(cwd)

const dir = path.dirname(__dirname)
console.log(dir)
