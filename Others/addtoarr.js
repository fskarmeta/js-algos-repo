function addToFrontOfNew(x, y) {
    return [y, ...x]
}

let x = [1, 2, 3]
let y = 5

console.log(addToFrontNew(x, y))