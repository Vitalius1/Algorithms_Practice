// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
// ============= Insert a value into an array at a given index =============
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// ++++++++++ The order of elements not important after insertion ++++++++++

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

// ++++++++++++++++ Keep the order of the original elements ++++++++++++++++

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

// function helper to reduce code lines. :)
function Swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

var arr = [1, 2, 4, 5],
    arr2 = [1, 2, 4, 5];
console.log(InsertAtIndex1(arr, 2, 3));  // => [1, 2, 3, 5, 4]
console.log(InsertAtIndex2(arr2, 2, 3)); // => [1, 2, 3, 4, 5]