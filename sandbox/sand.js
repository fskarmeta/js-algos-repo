let s = "This is SOO easy :loud_laugh:";
let d = {
  ":slight_smile:": ":)",
  ":disappointed:": ":(",
  ":loud_laugh:": "XD",
  ":open_mouth:": ":O",
  ":stuck_out_tongue:": ":P",
};

console.log(
  s
    .split(" ")
    .map((s) => (d[s] ? (s = d[s]) : s))
    .join(" ")
);

const byTwo = (a) => a * 2;
