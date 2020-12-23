function climbingLeaderboard(scores, alice) {

    let rankingNumber = []
    for (let i = 0; i <= scores.length; i++) {
        let uniqueValues = [...new Set(scores)].sort((a, b) => b - a)
        for (let j = 0; j < alice.length; j++) {
            if (alice[j] <= uniqueValues[i] && alice[j] > uniqueValues[i + 1]) {
                rankingNumber.push(i)
            }
        }
    }
    return rankingNumber
}

console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])) // 6 4 2 1
console.log(climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102])) // 6 5 4 2 1

// scores.sort((a, b) => b - a)




// function climbingLeaderboard(scores, alice) {

//     let arr = []
//     for (let i = 0; i < alice.length; i++) {
//         let test = scores.concat(alice[i]).sort((a, b) => b - a).filter((x, y) => scores.concat(alice[i]).sort((a, b) => b - a).indexOf(x) == y)
//         var c = test.length
//             // console.log(test)
//         arr.push(test.indexOf(alice[i]))
//     }
//     return arr.map(a => a + 1)
// }


function climbingLeaderboard(scores, alice) {

    let rankingNumber = []
    for (let i = 0; i < alice.length; i++) {
        let uniqueValues = [...new Set(scores), alice[i]].sort((a, b) => b - a)
        rankingNumber.push(uniqueValues.indexOf(alice[i]) + 1)
    }
    return rankingNumber
}