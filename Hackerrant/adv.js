function viralAdvertising(n) {
    let people = 5
    let likes = 0

for (let i = 0; i < n; i++) {
likes = likes + Math.floor(people/2)
people = Math.floor(people/2) * 3
}
return likes
}
console.log(viralAdvertising(3))