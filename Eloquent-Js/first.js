/*let count = '';
for (let i = 0; i < 7; i++) {
    count += '#';
    console.log(count)
} */

/* for (var line = "#"; line.length < 8; line += "#")
    console.log(line);



for (let i = 1; i <= 20; i++) {
    let output = ''
    if (i % 5 === 0)
        output += 'Buzz'
    if (i % 3 === 0)
        output += 'Fizz'
    console.log(output || i)

} */

/* let a = ' # # # # '
let b = '# # # # '
for (i = 0; i < 8; i++) {
    if (i % 2 !== 0)
        console.log(b)
    else
        console.log(a)

} */

/* let size = 8;

for (i = 0; i < size; i++) {
    input = '';
    if (i % 2 !== 0)
        input += ' #';
    else
        input += '# ';
    for (j = 0; j < size / (size / 2 * size); j++) {
        input = input + input
    }
    console.log(input)
} */

let size = 8
input = '';
for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
        if ((i + j) % 2 === 0)
            input += ' '
        else
            input += '#'
    }
    input += '\n'
}


console.log(input)
console.log(5 % 2)