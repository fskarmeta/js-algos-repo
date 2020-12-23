function timeConversion(s) {
    let test = s[8] + s[9];
    let splitArr = s.split("");
    let hourArr = []
    hourArr.push(splitArr[0])
    hourArr.push(splitArr[1])
    let newHour = hourArr[0].concat(hourArr[1])
    let newnewHour = parseInt(newHour)
    if (newnewHour < 12) {

    }
    return test;
}

console.log(timeConversion('07:05:45PM'))