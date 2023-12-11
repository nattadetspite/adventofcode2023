const readData = require("../utils.js");

const dataArray = readData("input.txt");
// const dataArray = ["abcone2threexyz\r"];

// regex check letter num
const threeLetters = ["one", "two", "six"];
const fourLetters = ["four", "five", "nine"];
const fiveLetters = ["three", "seven", "eight"];

const lettersNumberCheck = {
  3: threeLetters,
  4: fourLetters,
  5: fiveLetters,
};

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

function matchesFn(input, matchArr) {
  const pattern = new RegExp(matchArr.join("|"), "g");
  const matches = input.match(pattern);
  return matches;
}

function getNumber(data, i) {
  // check is number
  let c = data[i];
  if (c >= "0" && c <= "9") return c;
  // check letter number
  else {
    let numLettersCheck = [3, 4, 5];
    let numberOutput = 0;

    numLettersCheck.map((num) => {
      let dataCheck = data.substring(i, num + i);
      const matches = matchesFn(dataCheck, lettersNumberCheck[num]);
      if (matches !== null) {
        numberOutput = matches[0];
      }
    });

    return lettersToDigits[numberOutput];
  }
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

    let currNumber = getNumber(data, i);
    if (currNumber) {
      if (!isGetFirstNum) {
        firstNum = currNumber;
        isGetFirstNum = true;
      } else lastNum = currNumber; // find last
    }
  }
  // console.log({ data, firstNum, lastNum });

  // if not lastnum double first num;
  if (!lastNum) {
    lastNum = firstNum;
  }

  // connect first and last
  console.log({ firstNum, lastNum });
  let finiteNum = firstNum.toString() + lastNum.toString(); // str + str
  console.log("finiteNum: ", finiteNum);
  sum = sum + parseInt(finiteNum); // to int
});

console.log(sum); // ans
