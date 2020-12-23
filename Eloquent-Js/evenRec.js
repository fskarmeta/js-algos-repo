function positive(num) {
    if (num < 0) {
        return (num * -1)
    } else {
        return num
    }
}

function isEven(number) {
    number = positive(number);
    if (number === 0) {
        return true
    }
    if (number === 1) {
        return false
    } else {
        let minusTwo = isEven(number - 2)
        return minusTwo
    }
}

console.log(isEven(-2))