function smallestCommons(arr) {

    function isPrime(num) {
        for (let i = 2; num > i; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return num > 1;
    }

    function descom(num) {
        let aux = num;
        let auxArr = [];
        let condition = true;

        if (isPrime(num) || num === 1) {
            condition = false;
            auxArr.push(num)
        }

        while (condition) {
            let factores = 1;
            for (let factor_primo of auxArr) {
                factores *= factor_primo
                if (factores == num) {
                    condition = false;
                }
            }
            for (let i = 2; i < num; i++) {
                if (isPrime(i) && aux % i === 0) {
                    aux /= i;
                    auxArr.push(i);
                }
            }

        }
        return auxArr;
    }

    let newArr = []

    if (arr[0] < arr[1])
        for (let i = arr[0]; i <= arr[1]; i++) {
            newArr.push(i)
        }
    else
        for (let i = arr[1]; i <= arr[0]; i++) {
            newArr.push(i)
        }

    let primes = []

    for (let i = 2; newArr[newArr.length - 1] >= i; i++) {
        if (isPrime(i))
            primes.push(i)
    }
    console.log(primes)

    let descArr = [];

    for (let ak of newArr) {
        descArr.push(descom(ak))
    }
    let multicont = 1;
    for (let prime of primes) {
        let primExp = [];
        for (let desc of descArr) {
            desc.sort()
            let ctwo = 0;
            for (let value of desc) {
                if (value === prime) {
                    ctwo++
                }
            }
            primExp.push(ctwo)
        }
        let maxoftwo = Math.pow(prime, Math.max(...primExp))
        multicont *= maxoftwo;
    }
    return multicont;
}


console.log(smallestCommons([2, 10])); // 2520