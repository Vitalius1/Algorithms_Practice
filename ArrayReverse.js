// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
// ========================= Reverse Array in place ========================
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

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

// function helper to reduce code lines. :)
function Swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}


var arr = [1,2,3,4];
console.log(ReverseArray(arr)); // => [4, 3, 2, 1]