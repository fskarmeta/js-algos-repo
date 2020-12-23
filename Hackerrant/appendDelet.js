function appendAndDelete(s, t, k) {
let countMatches = 0;
let countSpaces = 0
let splitS = s.split("")
let splitT = t.split("")
for (let i in splitS) {
    if (splitS[i] === splitT[i]) {
        countMatches++
    }
}
let test = s.slice(countMatches , s.length)
return test // <=k ? "Yes" : "No"
}

// function appendAndDelete(s, t, k) {
//     let test = s.slice(s, t.length)
    
//     return test
// }

console.log(appendAndDelete("hackerhappy", "hackerrank", 9))
console.log(appendAndDelete("aba", "aba", 7))
console.log(appendAndDelete("ashley", "ash", 2))
console.log(appendAndDelete("zzzzz", "zzzzzzz", 4))