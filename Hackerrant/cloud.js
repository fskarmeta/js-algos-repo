function jumpingOnClouds(c, k) {
let e = 100; 


for (let i = c.length; i >= 0; i = i - k) {
    if (c[i] === 0) {
        e = e - 1
    }
    if (c[i] === 1) {
        e = e - 3
    }
}

return e

}




console.log(jumpingOnClouds([0,0,1,0,0,1,1,0], 2)) // 92

// review code
