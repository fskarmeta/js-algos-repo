function arrayToList(array) {
    var list = null;
    for (var i = array.length - 1; i >= 0; i--)
        list = { value: array[i], rest: list };
    return list;
}

function listToArray(list) {
    var array = [];
    for (var node = list; node; node = node.rest)
        console.log(value)
    array.push(node.value);
    return array;
}

let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: [Object]
        }
    }
}

console.log(listToArray(arrayToList([10, 20, 30])))

