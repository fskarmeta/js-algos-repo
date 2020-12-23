function select(arr, obj) {
    let newObj = {}
    for (let k in obj) {
        for (let i of arr) {
            if (k == i) {
                newObj[k] = obj[k]
            }
        }
    }
    return newObj
}