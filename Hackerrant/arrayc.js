function createArray(str) {
    return str.split(" ").map(el => Number(el))
}

console.log(createArray("4 6 5 3 3 1"))