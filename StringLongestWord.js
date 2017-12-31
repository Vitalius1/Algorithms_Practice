// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
// ================ Find the longest word in a String ======================
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

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

console.log(FindLongestWord("Hello world from inside the function"));
console.log(FindLongestWord_2("Hello world from inside the function"));