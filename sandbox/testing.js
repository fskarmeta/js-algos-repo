// const fibNum = (num) => {
//   if (num === 1 || num === 0) {
//     return 1;
//   }
//   return fibNum(num - 1) + fibNum(num - 2);
// };

// for (let i = 1; i < 10; i++) {
//   console.log(fibNum(i));
// }

const SelectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
};

console.log(SelectionSort([4, 5, 2, 3, 7, 9]));
