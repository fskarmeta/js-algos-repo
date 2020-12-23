function beautifulDays(i, j, k) {
let days = []
while (i <= j) {
    days.push(i)
    i++
}
return days.filter(a => Math.abs((Number(a.toString().split("").reverse().join(""))) - a) % k === 0).length
}

console.log(beautifulDays(20,23, 6))