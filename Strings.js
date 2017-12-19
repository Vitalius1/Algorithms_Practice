// =================================================================
// Reverse a string

function ReverseString(str){
    var revStr = '',
        i = str.length - 1;
    for (; i >= 0; i-- ) {
        revStr += str[i];
    }
    return revStr;
}

// Reversing a string using built in methods of Array and String
function revStr(str){
    return str.split('').reverse().join('');
}

// Uncomment next two lines to run the function and output the result to the console
// console.log(revStr('Vitalie'));
// console.log(ReverseString('Diana'));

// =================================================================