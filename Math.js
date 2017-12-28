// =================================================================

// Convert a number to Roman number

function ConvertToRoman(num) {
    let map = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let romanNum = '',
        i;
    for (i in map) {
        while (num >= map[i]) {
            romanNum += i;
            num -= map[i];
        }
    }
    return romanNum;
}

// Uncomment the line bellow to test the function and see the output in the console
console.log(ConvertToRoman(14));

// =================================================================