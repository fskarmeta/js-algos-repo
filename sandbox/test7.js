const N = 1000;
const T0 = 1;
const T1 = 1;
const T2 = 1;

arr = [T0, T1, T2];
for (i = 3; i < N + 3; i++) {
  arr.push(arr[i - 1] + arr[i - 2] + arr[i - 3]);
}
console.log(arr);
console.log(arr[N] % 1000000007);
