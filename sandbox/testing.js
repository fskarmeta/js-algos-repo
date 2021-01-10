const fibNum = (num) => {
  if (num === 1 || num === 0) {
    return 1;
  }
  return fibNum(num - 1) + fibNum(num - 2);
};

for (let i = 1; i < 10; i++) {
  console.log(fibNum(i));
}
