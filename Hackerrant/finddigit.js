function findDigits(n) {
let count = 0
n.toString().split("").forEach(a => n % parseInt(a) === 0 ? count++ : "" )
return count

}

console.log(findDigits(1012))