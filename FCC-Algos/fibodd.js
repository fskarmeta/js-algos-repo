/* function sumFibs(num) {
    if (num <= 0) return 0;

    const fibArr = [1, 1]
    let nextFib = 0

    while ((nextFib = fibArr[1] + fibArr[0]) < num) {
        fibArr.unshift(nextFib)
    }
    return fibArr.filter(x => x % 2 !== 0).reduce((a, b) => a + b)
}
console.log(sumFibs(0)); */

let size = 8;
let result = '';
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if ((i + j) % 2 === 0)
            result += ' ';
        else
            result += '#';
    }
    result += '\n'
}
console.log(result)