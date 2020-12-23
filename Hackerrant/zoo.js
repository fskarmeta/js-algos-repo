function kangaroo(x1, v1, x2, v2) {
    let kg1 = x1;
    let kg2 = x2;
    for (let i = 0; i < 10000; i++) {
        kg1 = kg1 + v1;
        kg2 = kg2 + v2;
        if (kg1 === kg2) {
            return 'YES'
        }
    }
    return 'NO'

}

console.log(kangaroo(0, 3, 4, 2))