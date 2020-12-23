function mutation(arr) {
    let arr1 = arr[0].toLowerCase()
    let arr2 = arr[1].toLowerCase().split("")

    let arr3 = []
    for (let e of arr2) {
        if (arr1.indexOf(e) != -1) {
            arr3.push(e)
        }
    }

    return arr3.join("") == arr[1].toLowerCase()
}



console.log(mutation(["hello", "Hello"])) // true
console.log(mutation(["floor", "for"])) // true
console.log(mutation(["hello", "neo"])) // false
console.log(mutation(["hello", "hey"])) // false
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])) // true
console.log(mutation(["voodoo", "no"])) // false

// .some(a => a == false) ? false : true

//nhcarrigan code
// function mutation(arr) {
//     return [...arr[1].toLowerCase()].every(el => arr[0].toLowerCase().includes(el))
// }