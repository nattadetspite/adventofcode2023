const readData = require("../utils");

const lettersNumber = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

const dataArray = readData("part2ExampleInput.txt");

let sum = 0;
dataArray.forEach((data) => {
    const lettersNumber = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    // Create a regex pattern by joining the lettersNumber array with the "|" (OR) operator
    const pattern = new RegExp(lettersNumber.join("|"), 'g');
    
    // Use the pattern to find matches in the exampleInput
    const matches = data.match(pattern);
    
    // Output the matches
    console.log(matches); // Output: ['two', 'nine']
});

console.log("sum: ", sum);
