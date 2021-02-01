var inputs = ["1", "2", "4", "6", "3"].map((e) => (e = parseInt(e)));

var inputs2 = ["2", "1", "8", "14", "6"].map((e) => (e = parseInt(e)));

let arr = inputs.concat(inputs2).sort((a, b) => a - b);

let s = "";

for (let i = 0; i < arr.length; i = i + 2) {
  s = s + `(${arr[i]}, ${arr[i + 1]}), `;
}

console.log(arr);
console.log(s);
