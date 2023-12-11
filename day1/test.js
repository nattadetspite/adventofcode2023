const inputString = 'oneight';

// Define replacement pairs
const replacements = [['one', '1'], ['eight', '8']];

const lettersNumber = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
// Create a regex pattern by joining the lettersNumber array with the "|" (OR) operator
const pattern = new RegExp(lettersNumber.join("|"), 'g');

// Use the pattern to find matches in the exampleInput
const matches = inputString.match(pattern);

// Output the matches
console.log(matches); // Output: ['two', 'nine']