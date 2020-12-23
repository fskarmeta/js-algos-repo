function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let man = 0;
    let nar = 0
    for (let i of apples) {
        if (i + a >= s && i + a <= t) {
            man++
        }
    }
    for (let j of oranges) {
        if (j + b >= s && j + b <= t) {
            nar++
        }
    }
    console.log(man)
    console.log(nar)
}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]))


/*
7 11 casa
5 15 manzano - naranjo
3 2
-2 2 1 d manzanas
5 -6 d naranjo
*/