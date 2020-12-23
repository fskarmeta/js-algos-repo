function breakingRecords(scores) {
    let start = scores[0]
    let end = scores[0]
    let min = []
    let max = []
    for (let i = 0; i <= scores.length; i++) {
        if (scores[i] > start) {
            start = scores[i]
            max.push(scores[i])

        }
        if (scores[i] < end) {
            end = scores[i]
            min.push(scores[i])
        }
    }
    return [max.length, min.length]
}


console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))
    // 3 4 21 36 10 28 35 5 24 42
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 24, 42]))