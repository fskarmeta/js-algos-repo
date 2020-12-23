function countingValleys(steps, path) {
    let lvl = 0
    let valley = 0;
    for (let value of path.split("")) {
        value == "U" ? lvl++ : lvl--;
        if (value == "U" && lvl == 0) {
            valley++
        }
    }
    return valley
}

console.log(countingValleys(8, "UDDDUDUU"))