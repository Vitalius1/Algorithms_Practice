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

console.log(ReverseString('Diana'));
// =================================================================