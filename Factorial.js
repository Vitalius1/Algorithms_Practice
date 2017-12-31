// ++++++ Using WHILE loop ++++++
function FactorialWhile(num) {
    var result = 1;
    while (num >= 1) {
        result *= num;
        num--;
    }
    return result;
}

// ++++++ Using FOR loop ++++++
function FactorialFor(num) {
    for (var res = 1; num >= 1; num--) {
        res = num * res;
    }
    return res;
}

// ++++++ Using Recursion ++++++
function rFactorial(num) {
    if (num === 0) {
        return 1;
    }
    return num * (rFactorial(num - 1));
}

console.log(FactorialWhile(4));
console.log(FactorialFor(4));
console.log(rFactorial(4));