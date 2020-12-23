function bonAppetit(bill, k, b) {
    let totalBill = bill.reduce((a, b) => a + b) / 2
    let partialBill = ([...bill.slice(0, k), ...bill.slice(k + 1, bill.length)].reduce((a, b) => a + b) / 2)
    return partialBill === b ? "Bon Appetit" : totalBill - partialBill
}



console.log(bonAppetit([3, 10, 2, 9], 1, 12)) // 5

// console.log(bonAppetit([3, 10, 2, 9], 1, 7)) // Bon Appetit