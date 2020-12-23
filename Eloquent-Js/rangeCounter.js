function range(start, end, step) {
    if (!step) step = 1;
    let numArr = [];

    if (step > 0) {
        for (let i = start; i <= end; i += step)
            numArr.push(i);
    } else {
        for (let i = start; i >= end; i += step)
            numArr.push(i);

    }
    return numArr;
}

console.log(range(10, 1, -2))

function sum(numbers) {
    let counter = 0
    for (let value of numbers) {
        counter = counter + value
    }
    return counter
}

console.log(sum(range(10, 1, -2)))