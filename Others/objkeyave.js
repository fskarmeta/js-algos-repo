var obj = {
    nada: 0
};

function getAverageOfElementsAtProperty(obj, key) {
    if (Array.isArray(obj.key) && obj.key.length > 0) {
        return obj.key.reduce((a, b) => a + b) / 2
    } else {
        return 0
    }
}

console.log(getAverageOfElementsAtProperty(obj, obj.key))