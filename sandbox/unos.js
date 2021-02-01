let N = 1000;
let total = 1;

while (N > 1) {
  if (N - 3 >= 3 || N - 3 == 0) {
    total *= 3;
    N -= 3;
    if (N == 0) {
      break;
    }
  } else {
    total *= 2;
    N -= 2;
    if (N == 0) {
      break;
    }
  }
}

console.log(BigInt(total));

// Cada 3 y 2 suma
// 6 -> primero 3 , y despues
