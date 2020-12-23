function utopianTree(n) {
    var meters = 1;
    if (n != 0)
        for (var j = 1; j <= n; j++)
            j % 2 == 0 ? meters++ : meters *= 2
    return meters;
}


console.log(utopianTree(4))