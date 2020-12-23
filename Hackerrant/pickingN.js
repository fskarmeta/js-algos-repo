let a = [1, 2, 2, 3, 1, 2]
let b = []
for (let i = 0; i <= a.length; i++) {
    for (let j = a.length; j > 0; j--) {

        console.log(([...a.slice(i, j), ...a.slice(i + 1, a.length)]))

    }
    return b
}






// console.log(pickingNumbers([1, 2, 2, 3, 1, 2])) // 3
// console.log(pickingNumbers([4, 6, 5, 3, 3, 1])) // 5