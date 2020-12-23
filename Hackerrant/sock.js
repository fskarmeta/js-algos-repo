function sockMerchant(n, ar) {
    const obj = {}
    ar.forEach(el => obj.hasOwnProperty(el) ? obj[el]++ : obj[el] = 1)
    console.log(Object.values(obj))
    let count = 0
    for (let ak in obj) {
        count = count + Math.floor(obj[ak] / 2)
    }
    return count
}


console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])) // 3

console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3])) // 4