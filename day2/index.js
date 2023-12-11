const readData = require("../utils");

const dataArray = readData("input.txt"); //exampleInput.txt, input.txt

/**
 * condition
 * red < 12
 * green < 13
 * blue < 14
 *
 * ans
 * sub of id of possible games
 */

let possibleSum = 0, powSum = 0;
dataArray.forEach((data, index) => {
  const id = index + 1; // get id
  const values = data.split(":")[1];
  const cubesEachBox = values.split(";");

  let isPossible = true;

  console.log("games: ", id);
  let maxCube = { red: 0, green: 0, blue: 0 };
  cubesEachBox.map((cubes) => {
    const _cubes = cubes.trim();
    const _cubesArr = _cubes.split(",");
    // console.log(_cubesArr);
    _cubesArr.forEach((cubes) => {
      const cubesKeyVal = cubes.trim().split(" ");
      const val = cubesKeyVal[0];
      const key = cubesKeyVal[1];

      // check possible
      if (key === "red" && val > 12) {
        isPossible = false;
      }
      if (key === "green" && val > 13) {
        isPossible = false;
      }
      if (key === "blue" && val > 14) {
        isPossible = false;
      }
      // part 2
      maxCube[key] = parseInt(val) > maxCube[key] ? parseInt(val) : parseInt(maxCube[key]);
    });
  });
  
  if (isPossible) possibleSum += id;

  // part 2
  console.log(id, maxCube);
  let pow = 1;
  Object.entries(maxCube).map(([key, val]) => {
    console.log('val maxcube: ', val)
    pow = pow * val;
  })
  powSum += pow
});

console.log("ans: ", possibleSum, powSum);
