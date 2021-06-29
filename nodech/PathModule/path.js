const { Console } = require("console");
const path = require("path");

console.log(path.dirname("C:\allcode\nodech\PathModule\path.js"))
console.log(path.extname("C:\allcode\nodech\PathModule\path.js"))
console.log(path.basename("C:\allcode\nodech\PathModule\path.js"))

const myPath = path.parse("C:\allcode\nodech\PathModule\path.js")

console.log(myPath.root)