function getTotalX(a, b) {
    let count = 0;
    for (let i = 1; i <= 100; i++) {
        if (a.every(v => (i % v === 0))) {
            if (b.every(v => (v % i === 0))) {
                console.log(i)
                count++

            }
        }

    }
    return count

}

console.log(getTotalX([2, 4], [16, 32, 96]))