function gradingStudents(grades) {
    let grady = function(x) {
        if (x <= 36) {
            return x;
        }
        var mArray = []
        for (let i = 0; i <= 100; i++) {
            if (i % 5 === 0)
                mArray.push(i)
        }
        let num = []
        for (let j of mArray) {
            if (x + 1 === j || x + 2 === j) {
                num.push(j)
            }
        }
        if (Number(num) === 0) {
            return x
        } else {
            return Number(num)
        }
    }
    return grades.map(a => grady(a))
}
console.log(gradingStudents([4, 73, 67, 38, 33]))
console.log(Math.ceil(83 / 5) * 5)