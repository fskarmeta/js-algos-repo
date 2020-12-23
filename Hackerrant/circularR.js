function circularArrayRotation(a, k, queries) {
return queries.map(el => [...a.slice(a.length - k%a.length , a.length), ...a.slice(0,a.length - k%a.length)][el])
}

// a array
// k numero de rotaciones
// queries , indices a reportar

console.log(circularArrayRotation([1,2,3,4,5,6], 3, [0,1,2]))

// [4,3,1,2]


1,2,3,4,5,6 // 0
6,1,2,3,4,5 // 1
5,6,1,2,3,4 // 2
4,5,6,1,2,3 // 3