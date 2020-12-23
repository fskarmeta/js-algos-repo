function transform(num) {
    let ctoArray = Array.from(num.toString()).map(Number)
    let newArr = [];
    if (ctoArray.length === 4) {
        newArr.push(ctoArray[0] + '000')
        newArr.push(ctoArray[1] + '00')
        newArr.push(ctoArray[2] + '0')
        newArr.push(ctoArray[3].toString())
    }
    if (ctoArray.length === 3) {
        newArr.push(ctoArray[0] + '00')
        newArr.push(ctoArray[1] + '0')
        newArr.push(ctoArray[2].toString())
    }
    if (ctoArray.length === 2) {
        newArr.push(ctoArray[0] + '0')
        newArr.push(ctoArray[1].toString())
    }
    if (ctoArray.length === 1) {
        newArr.push(ctoArray[0].toString())
    }

    return newArr
}

function convertToRoman(num) {
    let number = transform(num)
    let whole = []
    for (let i of number) {
        switch (i) {
            case '1':
                whole.push('I');
                break;
            case '2':
                whole.push('II');
                break;
            case '3':
                whole.push('III');
                break;
            case '4':
                whole.push('IV');
                break;
            case '5':
                whole.push('V');
                break;
            case '6':
                whole.push('VI');
                break;
            case '7':
                whole.push('VII');
                break;
            case '8':
                whole.push('VIII');
                break;
            case '9':
                whole.push('IX');
                break;
            case '10':
                whole.push('X');
                break;
            case '20':
                whole.push('XX');
                break;
            case '30':
                whole.push('XXX');
                break;
            case '40':
                whole.push('XL');
                break;
            case '50':
                whole.push('L');
                break;
            case '60':
                whole.push('LX');
                break;
            case '70':
                whole.push('LXX');
                break;
            case '80':
                whole.push('LXXX');
                break;
            case '90':
                whole.push('XC');
                break;
            case '100':
                whole.push('C');
                break;
            case '200':
                whole.push('CC');
                break;
            case '300':
                whole.push('CCC');
                break;
            case '400':
                whole.push('CD');
                break;
            case '500':
                whole.push('D');
                break;
            case '600':
                whole.push('DC');
                break;
            case '700':
                whole.push('DCC');
                break;
            case '800':
                whole.push('DCCC');
                break;
            case '900':
                whole.push('CM');
                break;
            case '1000':
                whole.push('M');
                break;
            case '2000':
                whole.push('MM');
                break;
            case '3000':
                whole.push('MMM')
                break;
        }
    }

    return whole.join("");
}
console.log(convertToRoman(3023))

/*
switch (num) {
            case 1:
                whole = 'I';
                break;
            case 2:
                whole = 'II';
                break;
            case 3:
                whole = 'III';
                break;
            case 4:
                whole = 'IV';
                break;
            case 5:
                whole = 'V';
                break;
            case 6:
                whole = 'VI';
                break;
            case 7:
                whole = 'VII';
                break;
            case 8:
                whole = 'VIII';
                break;
            case 9:
                whole = 'IX'
                break;
        }
        */