function extraLongFactorials(n) {
let count = BigInt(1);
let i = BigInt(n);
while (i >= 1) {
    count = count * i
    i--
}

return count.toString()
}

console.log(extraLongFactorials(25))