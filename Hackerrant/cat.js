function catAndMouse(x, y, z) {
    let catA = Math.abs(x - z)
    let catB = Math.abs(y - z)

    if (catA < catB) {
        return 'Cat A'
    }
    if (catA > catB) {
        return 'Cat B'
    } else {
        return 'Mouse C'
    }

}

console.log(catAndMouse(1, 3, 2))