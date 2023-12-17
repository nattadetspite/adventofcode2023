const fs = require("fs");


const readData = (input) => {
    const data = fs.readFileSync(input, { encoding: "utf8", flag: "r" }); // exampleInput.txt and input.txt
    const dataArray = data.replace(/\r/g, '').split("\n");
    console.log(dataArray);
    return dataArray;
}

module.exports = readData;