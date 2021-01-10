function countBs(string) {
    return countChar(string, 'B')
}

function countChar(string, char) {
    let newStr = arguments[0];
    let counter = 0;
    for (let i of newStr) {
        if (i === char) {
            counter++
        }
    }
    return counter
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));

