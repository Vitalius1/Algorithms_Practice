// =================================================================

// Reverse a string

function ReverseString(str) {
    var revStr = '',
        i = str.length - 1;
    for (; i >= 0; i--) {
        revStr += str[i];
    }
    return revStr;
}

// Reversing a string using built in methods of Array and String
function revStr(str) {
    return str.split('').reverse().join('');
}

// Uncomment next two lines to run the function and output the result to the console
// console.log(revStr('Vitalie'));
// console.log(ReverseString('Diana'));

// =================================================================

// Find the longest word in a String. Return it's length and console.log the word to the console.

function FindLongestWord(str) {
    let arr = str.split(' ');
    let longestWord = arr[0],
        i;
    for (i = 1; i < arr.length; i++) {
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i];
        }
    }
    console.log(longestWord);
    return longestWord.length
}

// Using reduce
function FindLongestWord_2(str) {
    return str.split(' ').reduce(function (x, y) {
        return Math.max(x, y.length);
    }, 0);
}

// Uncomment next two lines to run the function and output the result to the console
console.log(FindLongestWord("Hello world from inside the function"));
console.log(FindLongestWord_2("Hello world from inside the function"));

// =================================================================