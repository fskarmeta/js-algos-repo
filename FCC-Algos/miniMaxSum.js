function miniMaxSum(arr) {
    arr.sort((a, b) => a - b)
    let minarr = [];
    let maxarr = [];

    for (let i = 0; i < 4; i++) {
        minarr.push(arr[i]);
    }
    for (let j = arr.length - 4; j < arr.length; j++) {
        maxarr.push(arr[j]);
    }
    let min = minarr.reduce((a, b) => a + b);
    let max = maxarr.reduce((a, b) => a + b);
    console.log(min, max);
}


console.log(miniMaxSum([1, 3, 5, 7, 9])); // 16 24


arr.sort((a, b) => a - b);
console.log(String(arr.slice(0, 4).reduce((a, b) => a + b)) + ' ' + String(arr.slice(1, 5).reduce((a, b) => a + b)));

// 13 22

// return min.reduce((a, b) => a + b)