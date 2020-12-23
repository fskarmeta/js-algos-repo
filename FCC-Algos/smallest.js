function smallestCommons(arr) {

    let newArr = []
    if (arr[0] < arr[1])
        for (let i = arr[0]; i <= arr[1]; i++) {
            newArr.push(i)
        }
    else
        for (let i = arr[1]; i <= arr[0]; i++) {
            newArr.push(i)
        }

    newArr.reverse()

    let quot = 0;
    let loop = 1;
    let n;

    do {
        quot = newArr[0] * loop * newArr[1];
        console.log(quot + ' quociente')
        for (n = 2; n < newArr.length; n++) {
            console.log(n)
            if (quot % newArr[n] !== 0) {
                break;
            }
        }

        loop++

    } while (n !== newArr.length)


    return quot
}

console.log(smallestCommons([2, 10])); // 2520