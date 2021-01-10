function whatIsInAName(collection, source) {
  var key = Object.keys(source);
  console.log(key);
  console.log(source["last"]);
  console.log(source[Object.keys(source)]);
  return collection.filter(function (a) {
    for (let i = 0; i < key.length; i++) {
      if (!a.hasOwnProperty(key[i]) || a[key[i]] !== source[key[i]]) {
        return false;
      }
    }
    return true; // The falsohood is the truth
  });
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);
