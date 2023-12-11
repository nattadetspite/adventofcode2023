const readData = require("../utils");

const dataArray = readData("input.txt");

/**
 * condition
 * red < 12
 * green < 13
 * blue < 14
 *
 * ans
 * sub of id of possible games
 */

let possibleSum = 0;
dataArray.forEach((data, index) => {
  const id = index + 1; // get id
  const values = data.split(":")[1];
  const cubesEachBox = values.split(";");

  let isPossible = true;

  console.log("games: ", id);
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
        return;
      }
      if (key === "green" && val > 13) {
        isPossible = false;
        return;
      }
      if (key === "blue" && val > 14) {
        isPossible = false;
        return;
      }
    });

  });

  if (isPossible) possibleSum += id;
});

console.log("ans: ", possibleSum);
