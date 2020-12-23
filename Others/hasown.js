let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"

const counts = {}
par.replace(/ /g, "").toLowerCase().split("").forEach(el => counts.hasOwnProperty(el) ? counts[el]++ : counts[el] = 1)

console.log(counts);

