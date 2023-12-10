const fs = require("fs");

const data = fs.readFileSync("./input.txt", { encoding: "utf8", flag: "r" }); // exampleInput.txt and input.txt
const dataArray = data.split("\n");
console.log(dataArray);

function isCharNumber(c) {
  return c >= "0" && c <= "9";
}

let sum = 0;

// loop over all dataArray
dataArray.forEach((data) => {
  let firstNum = 0,
    isGetFirstNum = false;
  let lastNum = 0;
  for (let i = 0; i < data.length; i++) {
    // n time complexity
    // find first
    if (isCharNumber(data[i])) {
      if (!isGetFirstNum) {
        firstNum = data[i];
        isGetFirstNum = true;
      } else lastNum = data[i]; // find last
    }
  }
  console.log({ data, firstNum, lastNum });

  // if not lastnum double first num;
  if (!lastNum) {
    lastNum = firstNum;
  }

  // connect first and last
  let finiteNum = firstNum + lastNum // str + str
  sum = sum + parseInt(finiteNum) // to int
});

console.log(sum) // ans
