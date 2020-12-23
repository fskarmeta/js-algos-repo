function pageCount(n, p) { // n = number of pages    p  == target page
    let pages = [...Array(n + 1).keys()].slice(1)

    let counterFront = 0
    for (let j = 0; j <= n; j++) {
        if (pages[j] <= p) {
            counterFront++
        }
    }
    let counterBack = 0
    for (let k = n - 2; k > 0; k--) {
        if (pages[k] >= p) {
            counterBack++
        }
    }

    if (n <= 2) {
        return 0
    }
    if (n % 2 === 0 && n - p === 1) {
        return 1
    } else {
        return Math.floor(Math.min((counterFront / 2), (counterBack / 2)))
    }
}



console.log(pageCount(6, 2)) // 1
console.log(pageCount(5, 5)) // 0
console.log(pageCount(7, 4)) // 1
console.log(pageCount(73201, 57075)) // 8063
console.log(pageCount(70809, 46090)) // 12359
console.log(pageCount(18183, 18042)) // 70
console.log(pageCount(5809, 2668)) // 1334 
console.log(pageCount(5, 4)) // 0
console.log(pageCount(6, 5)) // 1
console.log(pageCount(2, 1)) //