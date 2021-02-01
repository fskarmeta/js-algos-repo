let s = "Banana";

let dic = {};
let b = s
  .split("")
  .sort()
  .forEach((a) => (dic.hasOwnProperty(a) ? dic[a]++ : (dic[a] = 1)));

Object.keys(dic).forEach((w) => console.log(w.repeat(dic[w])));
