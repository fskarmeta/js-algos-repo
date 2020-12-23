function permutationEquation(p) {
let newArr = []

for (let i = 1; i <= p.length; i++) {
    
    newArr.push(p.indexOf(p.indexOf(i) + 1) +1)
}
return newArr
}


console.log(permutationEquation([4 ,3 ,5, 1, 2]))