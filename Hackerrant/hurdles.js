function hurdleRace(k, height) {
    return Math.max(...height) - k > 0 ? Math.max(...height) - k : 0

}

console.log(hurdleRace(7, [2, 5, 4, 5, 2]))