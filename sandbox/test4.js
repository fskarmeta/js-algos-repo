let arr = ["x", "y", "z"];

function getShortestUniqueSubtring(s) {
  let finalString = "";
  let max = s.length - arr.length;
  console.log(max);
  let counter = arr.length;
  console.log(counter);
  while (counter <= max) {
    console.log("yes");
    for (let i = 0; i < counter; i++) {
      let subS = s.substr(i, counter);
      //   console.log(subS);
      let localCounter = 0;
      for (let j of subS) {
        for (let k of arr) {
          if (k == j) {
            localCounter++;
          }
        }
      }
      if (localCounter == arr.length) {
        return (finalString = subS);
      }
      counter++;
    }
  }
  return finalString;
}

console.log(getShortestUniqueSubtring("xyyzyzyx"));

// let c = "holaquetal";

// console.log(c.substr(6, 4));
// console.log(c.length);
