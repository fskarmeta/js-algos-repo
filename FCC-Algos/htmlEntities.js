function convertHTML(str) {
    let lookUp = {
        "\<": '%alt;',
        "\>": '$gt;',
        "\&": '&amp;',
        '\"': '&quot;',
        "\'": '&apos;'
    };

    let newArr = str.split("")
    return newArr.map(a => lookUp[a] || a).join("");;
}




console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"))
console.log(convertHTML("Sixty > twelve"))
console.log(convertHTML('Stuff in "quotation marks"'))


/* function convertHTML(str) {
    let [smaller, greater, and, quot, apos] = ['<', '>', '&', '"', '"'];
    let [smallerHTML, greaterHTML, andHTML, quotHTML, aposHTML] = ['&alt;', '&gt;', '&amp;', '&quot;', '&apos;'];

    let lookUp = { '<' : '%alt', '>' : '$gt', '&' : '&amp', '"' : '&quot', "'" :  }
    let newArr = str.split("")
    for (let i = 0; i < newArr.length; i++) {
        if (newArr.indexOf(smaller) > 0) {
            newArr.splice(newArr[i].indexOf(smaller), 1, smallerHTML)
        }
        if (newArr.indexOf(greater) > 0) {
            newArr.splice(newArr.indexOf(greater), 1, greaterHTML)
        }
        if (newArr.indexOf(and) > 0) {
            newArr.splice(newArr.indexOf(and), 1, andHTML)
        }
        if (newArr.indexOf(quot) > 0) {
            newArr.splice(newArr.indexOf(quot), 1, quotHTML)
        }
        if (newArr.indexOf(apos) > 0) {
            newArr.splice(newArr.indexOf(apos), 1, aposHTML)
        }
    }

    return newArr.join("")
*/