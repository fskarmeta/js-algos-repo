function countAllCharacters(str) {
    let test = str.split("")
    let newObj = {}
    for (let i of test) {
        newObj[i] = 0
        for (let j of test) {
            if (i == j) {
                newObj[j]++
            }
        }
    }
    return newObj
}

console.log(countAllCharacters('probando'))