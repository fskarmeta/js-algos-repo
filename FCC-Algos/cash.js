function checkCashRegister(price, cash, cid) {
    // Total Amount of Money Generator
    let total = 0;
    let cashdigits = [];
    for (let i of cid) {
        total += i[1]
        cashdigits.push(i[1])
    }
    // Change to give
    let rest = cash - price

    // Value of coins
    let lookup = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "HUNDRED": 100,
    };

    // Amount of coins/bills for each value
    let newCash = {
        PENNY: cashdigits[0] / 0.01,
        NICKEL: cashdigits[1] / 0.05,
        DIME: cashdigits[2] / 0.1,
        QUARTER: cashdigits[3] / 0.25,
        ONE: cashdigits[4] / 1,
        FIVE: cashdigits[5] / 5,
        TEN: cashdigits[6] / 10,
        TWENTY: cashdigits[7] / 20,
        HUNDRED: cashdigits[8] / 100
    };


    // Object to be Returned
    let returnObject = { status: "", change: [] }

    // Emmpty Register to push to our return object
    let cashlookup = {
        "PENNY": 0,
        "NICKEL": 0,
        "DIME": 0,
        "QUARTER": 0,
        "ONE": 0,
        "FIVE": 0,
        "TEN": 0,
        "TWENTY": 0,
        "ONE HUNDRED": 0,
    };


    returnObject.status = "OPEN" // Default status


    if (total < rest) { // if change is bigger then the total
        returnObject.status = "INSUFFICIENT_FUNDS";
        rest = 0;
    }



    while (rest > 0) {
        console.log("while")
        if (total === rest) {
            returnObject.status = "CLOSED";
            returnObject.change = cid;
            break;
        }

        for (let i = 0; i < Object.values(lookup).length; i++) { // Iterate over Each LookUp
            if (Object.values(lookup).reverse()[i] <= rest) { // We see if rest (the change) is bigger then any LookUp
                if (Object.values(newCash).reverse()[i] > 0) { // We see if there is enough coins/bills of that Lookup
                    rest -= Object.values(lookup).reverse()[i] // We rest the rest(change) to that LookUp
                    rest = rest.toFixed(2)
                    newCash[Object.keys(newCash).reverse()[i]] -= 1 // We take one unit out of that coin/bill
                    cashlookup[Object.keys(cashlookup).reverse()[i]] += Object.values(lookup).reverse()[i] // We add the values to our empty cashlookup
                    break;
                }
                while (rest < 0.5) {
                    returnObject.status = "INSUFFICIENT_FUNDS";
                    rest = 0;
                    break;
                }

            }
        }
    }

    for (let key = 0; key < Object.values(cashlookup).length; key++) { // Iterate over all our previous empty newCashLookUp
        if (Object.values(cashlookup).reverse()[key] > 0.02) {
            returnObject.change = returnObject.change.concat([
                [Object.keys(cashlookup).reverse()[key], Number(Object.values(cashlookup).reverse()[key].toFixed(2))] // Concate the results to our returnObject
            ])

        }
    }

    return returnObject

}




checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
])

checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
])
checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
])

checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
])