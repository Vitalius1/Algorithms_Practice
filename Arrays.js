function Swap(arr, idx1, idx2) { // function helper to reduce code lines. :)
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}
// ====================================================================================================

// Reverse Array in place

function ReverseArray(arr) {
    if (arr.length <= 1) { // check for arrays with 1 or 0 elements
        return arr;
    }
    var lastIdx = arr.length - 1,
        midIdx = Math.floor(lastIdx / 2), // find the middle idx
        i;
    for (i = 0; i <= midIdx; i++) {
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
// var arr = [1,2,3,4];
// console.log(ReverseArray(arr));

// ====================================================================================================

// Insert into an array at an index

// The order of elements not important after insertion
function InsertAtIndex1(arr, idx, val) {
    var lastIdx = arr.length - 1;
    if (idx < 0 || idx > lastIdx) {
        console.log("Index provided is out of bounds of the array to insert into.");
        return;
    }
    arr.push(val);
    Swap(arr, idx, arr.length - 1);
    return arr;
}

// Uncomment next two lines to run the function and output the result to the console
// var arr = [1, 2, 3, 5]
// console.log(InsertAtIndex1(arr, 2, 4));


// The order of elements needs to be kept after insertion (without using splice or slice methods)
function InsertAtIndex2(arr, idx, val) {
    var lastIdx = arr.length - 1,
    i;
    if (idx < 0 || idx > lastIdx) {
        console.log("Index provided is out of bounds of the array to insert into.");
        return;
    }
    for (i = lastIdx; i >= idx; i--) {
        arr[i + 1] = arr[i];
    }
    arr[idx] = val;
    return arr;
}

// Uncomment next two lines to run the function and output the result to the console
// var arr = [1, 2, 3, 5]
// console.log(InsertAtIndex2(arr, 1, 4));

// ====================================================================================================