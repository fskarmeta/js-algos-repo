function migratoryBirds(arr) {
    const obj = {}
    arr.forEach(el => obj.hasOwnProperty(el) ? obj[el]++ : obj[el] = 1)
    console.log(Object.entries(obj))
    return Object.entries(obj).sort((a, b) => b[1] - a[1])[0][0]

}


console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]))

// [1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5]