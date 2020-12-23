function timeConversion(s) {
    if (s[8] === 'A' && s[0].concat(s[1]) === '12') {
        let mid = '00'
        let o = mid.concat(s.slice(2, 8))
        return o
    }
    if (s[8] === 'A') {
        return s.slice(0, 8)
    }
    if (s[8] == 'P' && s[0].concat(s[1]) === '12') {
        return s.slice(0, 8)
    }
    if (s[8] == 'P') {
        let clean = s.slice(0, 8)
        let rest = s.slice(2, 8)
        let test = Number(clean.slice(0, 2)) + 12
        let final = test.toString().concat(rest)
        return final
    }
}
console.log(timeConversion('12:45:54PM')) // 12:45:54
console.log(timeConversion('07:05:45PM')) // 19:05:45
console.log(timeConversion('12:45:54PM')) // 12:45:54
console.log(timeConversion('04:59:59PM')) // 16:59:59
console.log(timeConversion('12:40:22AM')) // 00:40:22