const readData = require("../utils.js");

const dataArray = readData("input.txt");

function isCharNumber(c) {
  return c >= "0" && c <= "9";
}

let sum = 0;
// 7 window string check

// loop over all dataArray
dataArray.forEach((data) => {
  let firstNum = 0,
    isGetFirstNum = false;
  let lastNum = 0;

  // regex check letter num
  const lettersNumber = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

  // Create a regex pattern by joining the lettersNumber array with the "|" (OR) operator
  const pattern = new RegExp(lettersNumber.join("|"), "g");

  // Use the pattern to find matches in the exampleInput
  const matches = data.match(pattern);

  // replace letter num to digits
  if (matches !== null) {
    const lettersToDigits = {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
    };
    console.log("before data: ", data);
    matches.forEach((match) => {
      data = data.replace(new RegExp(match, "g"), lettersToDigits[match]);
    });

    console.log("replaced data: ", data);
  }

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
  // console.log({ data, firstNum, lastNum });

  // if not lastnum double first num;
  if (!lastNum) {
    lastNum = firstNum;
  }

  // connect first and last
  let finiteNum = firstNum + lastNum; // str + str
  console.log('finiteNum: ', finiteNum)
  sum = sum + parseInt(finiteNum); // to int
});

console.log(sum); // ans
