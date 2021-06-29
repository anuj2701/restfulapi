const fs = require("fs")

const bioData = {
    name : "anuj",
    age : 20,
    address:"moon"

}

// console.log(bioData)

const jsondata = JSON.stringify(bioData);

// fs.writeFile("jason1.json",jsondata,(err) => {
//    console.log(err)
// })

fs.readFile("jason1.json","utf-8",(err,data) => {
    const objData = JSON.parse(data);

    console.log(data);
    console.log(objData)
});


