const fs = require("fs");

// fs.writeFileSync("bio.txt", "my name is anuj")
// const data = fs.readFileSync('bio.txt',"utf8");
// console.log(data);

// fs.renameSync("bio.txt","Bio.txt")

// fs.writeFileSync("fsAsync/read.txt","like my video");

// fs.appendFile("read.txt","video please",(err) => {
//   console.log("task completed")

// });

fs.readFile("read.txt","utf-8",(err,data) => {
    console.log(data);
})