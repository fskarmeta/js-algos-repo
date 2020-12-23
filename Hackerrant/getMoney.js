function getMoneySpent(keyboards, drives, b) {
    let k = keyboards.sort((a, b) => b - a)
    let d = drives.sort((a, b) => b - a)
    let results = []
    for (let v of k) {
        for (let i of d) {
            if (v + i <= b) {
                results.push(v + i)
            }
        }
    }

    if (results.length > 0) {
        return results.sort((a, b) => b - a)[0]
    } else {
        return -1
    }
}



console.log(getMoneySpent([3, 1], [5, 2, 8], 10)) // 9