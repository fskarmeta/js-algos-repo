function destroyer(arr) {
    let firstArr = arguments[0];
    let newArr = [];
    for (let i = 0; i < firstArr.length; i++) {
        if (firstArr[i] == arguments[i]) {
            newArr.push(arguments[i]);
        }
    }
    console.log(newArr)
    return firstArr.filter((a) => newArr.indexOf(a) === -1);
}
console.clear()
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // [1,1]
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); // [1]