function birthdayCakeCandles(candles) {
    candles.sort((a, b) => a - b)
    let highest = [];
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] >= candles[candles.length - 1]) {
            highest.push(candles[i]);
        }
    }
    return highest.length;
}


console.log(birthdayCakeCandles([5, 4, 2, 1, 3, 5, 3, 2])); // 2
console.log(birthdayCakeCandles([3, 2, 1, 3])); // 2