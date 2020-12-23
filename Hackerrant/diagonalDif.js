function diagonalDifference(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i][i] - arr[i][arr.length - i - 1];
    }
    console.log(Math.abs(sum));
}


console.log(diagonalDifference([
    [11, 2, 4, 5],
    [4, 5, 6, 12],
    [10, 8, -12, 13],
    [18, 24, 69, -295]
]));