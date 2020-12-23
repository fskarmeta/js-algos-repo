function reverseArray(array) {
    let newArr = []
    for (let e of array) {
        newArr.unshift(e)
    }
    return newArr
}



function reverseArrayInPlace(array) {
    for (var i = 0; i < Math.floor(array.length / 2); i++) {
        var old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
        console.log(array)
    }
    return array;
}


console.log(reverseArrayInPlace(["hola", false, 3, "breakfast", 6, null, "missisipi"]))