// function cat(n) {
//     let meow = ''
//     let string = ''
//     let i = 0;
//     while (i < n) {
//         i++
//         meow += ' meow'
//         string += meow + ('...' + '\n')
//     }
//     return string
// }

// console.log(cat(25))
/*
     meow meow...
     meow meow meow meow...
     meow meow meow meow meow meow meow meow...
     */

function reason(string) {
  return (
    "This is one of the " +
    Math.floor(Math.random() * 10000) +
    " reasons for why " +
    string +
    " is amazing!"
  );
}

reason("freecodecamp");
