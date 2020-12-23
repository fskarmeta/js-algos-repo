/*
function makeNewArray(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(makeNewArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
        return [];
    } else {
        const param = rangeOfNumbers(startNum, endNum - 1);
        param.unshift(endNum);
        return param;
    }
}


console.log(rangeOfNumbers(3, 20));


function newList(list) {
    return list.sort()
}

console.log(newList(["Damian", "Juan", "Fabian", "Ignacio", "Gabriel", "Adrian", "Benjamin", "Camilo", "Esteban", "Hans"]))


function sacaUnoEntraOtra(arr, item) {
    arr.push(item);
    arr.shift();
    return arr;
}

console.log(sacaUnoEntraOtra([1, 2, 3, 4], 5))

/*

If `prop` isn't `"tracks"` and `value` isn't empty (`""`), update or set the `value` for that record album's property.

Your function must always return the entire collection object.

There are several rules for handling incomplete data:

If `prop` is `"tracks"` but the album doesn't have a `"tracks"` property, create an empty array before adding the new value to the album's corresponding property.

If `prop` is `"tracks"` and `value` isn't empty (`""`), push the `value` onto the end of the album's existing `tracks` array.

If `value` is empty (`""`), delete the given `prop` property from the album. */

/*

var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
            "1999",
            "Little Red Corvette"
        ]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        album: "ABBA Gold"
    }
};

// // Si es Prop Tracks -> Crear Array y Pushear el Valor /  Si no es tracks -> Upgradear las otras cosas -> Si el valor esta vacio, borrar.

function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection;
}



console.log(updateRecords(2468, "artist", ""));

function fib(n) {
    if (n >= 3)
        return fib(n - 1) + fib(n - 2);
    else {
        return 1;
    }
}
console.log(fib(20));
*/

/* function stepts(n) {
    if (n >= 2)
        return stepts(n - 1) + stepts(n - 2);
    else {
        return 1;
    }
}
console.log(stepts(11)); */

/* function up(n) {
    if (n < 2)
        return 1;
} else {
    const new = up(n + 1):
        new [0]

} */

/* function staircase(n) {
    for (let i = 1; i <= n; i++) {
        console.log("#".repeat(i).padStart(n));
    }
} */

/* function staircase(n) {
    for (let x = 1; x <= n; x++) {
        console.log(" ".repeat(n - x) + "#".repeat(x));
    }
}

console.log(staircase(3)); */





console.log("test");



/* console.log("\xa0\xa0\xa0#\n\xa0\xa0##\n\xa0###") */

/* width \xa0 * n "#" | \n + (\xa0 * (n[i]-1)) */