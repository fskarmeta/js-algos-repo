function designerPdfViewer(h, word) {
    let a = "abcdefghijklmnopqrstuvwxyz"
    return Math.max(...word.split("").map(w => a.indexOf(w)).map(i => h[i])) * word.length

}

console.log(designerPdfViewer([
    1, 3, 1, 3, 1, 4, 1, 3,
    2, 5, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5,
    5, 7
], "zaba"))

function createArray(str) {
    return str.split(" ").map(el => Number(el))
}

// console.log(createArray("1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7"))