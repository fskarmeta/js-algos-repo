function diffArray(arr1, arr2) {

    return arr1.filter((a) => arr2.indexOf(a) === -1).concat(arr2.filter((a) => arr1.indexOf(a) === -1));
}

console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

// "diorite", "pink wool"
/* console.clear()
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); // "diorite", "pink wool"
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));
// ["snuffleupagus", "cookie monster", "elmo"] */