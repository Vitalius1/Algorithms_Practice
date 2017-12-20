function Swap(arr, idx1, idx2){ // function helper to reduce code lines. :)
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}
// =================================================================

// Reverse Array in place

function ReverseArray(arr){
    var lastIdx = arr.length - 1,
        midIdx = Math.floor(lastIdx/2), // find the middle idx
        i;
    for (i = 0; i <= midIdx; i++){
        /* 
        Perform the swap of the array elements beginning with first and last
        moving towards the middle with the same step until the mid element
        is reached
        */
        Swap(arr, i, lastIdx - i);
    }
    return arr;
}

// Uncomment next two lines to run the function and output the result to the console
var arr = [1,2,3,4];
console.log(ReverseArray(arr));

// =================================================================

// Insert into an array at an index (the order of elements not important after insertion)

function InsertAtIndex(arr, val, idx){
    arr.push(val);
    Swap(arr, idx, arr.length - 1);
    return arr;
}

var arr = [1,2,3,5]
console.log(InsertAtIndex(arr, 4, 2));