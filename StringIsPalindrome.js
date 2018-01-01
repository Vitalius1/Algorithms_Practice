// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
// ================ Return if a String is a palindrome =====================
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// ++++++ Using split(), reverse(), join() +++++
function isPalindrome_1(string) {
    let strReverse = string.toLowerCase().split('').reverse().join('');
    return string === strReverse;
}

// ++++++ Using replace() to remove the non-word characters plus the underscore ++++++
function isPalindrome_2(string) {
    string = string.toLowerCase().replace(/[\W_]/g, '');
    let lastIdx = string.length - 1,
        i = 0;
    for (; i < lastIdx / 2; i++) {
        if (string[i] !== string[lastIdx - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome_1("aha")); // => true
console.log(isPalindrome_2("ah*&^%%_a")); // => true