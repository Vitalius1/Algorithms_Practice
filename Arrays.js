// =================================================================
// Reverse Array in place

function ReverseArray(arr){
    var lastIdx = arr.length - 1,
        midIdx = Math.floor(lastIdx/2), // find the middle idx
        i;
    for (i = 0; i <= midIdx; i++){
        /* 
        Perform the swap of the array elements beginning with first and last
        moving towards the middle with the same step up until the mid element
        is reached
        */
        var temp = arr[i];
        arr[i] = arr[lastIdx - i];
        arr[lastIdx - i] = temp;
    }
    return arr;
}

// Uncomment next two lines to run the function and output the result to the console
// var arr = [1,2,3,4];
// console.log(ReverseArray(arr));

// =================================================================