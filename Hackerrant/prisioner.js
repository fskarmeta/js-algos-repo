function saveThePrisoner(n, m, s) {
    return (m - 1 + s) % n || n;
}

// console.log(saveThePrisoner(7, 19, 2)) //6
// console.log(saveThePrisoner(3, 7, 3)) //3
// console.log(saveThePrisoner(352926151, 380324688, 94730870)) // 122129406

// n : number of prisioners
// m : treats
// s: chair position

// Math.ceil((s + (Math.ceil(m / n) + 1)) / n)


console.log(9 % 3)