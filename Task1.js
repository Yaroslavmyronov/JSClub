"use strict";

function umSliceArray(arr, first, second) {
    if (typeof(first) !== "number" || typeof(second) !== "number") {
        throw new TypeError("Data type is not a number");
    }
    if (first > arr.length || second > arr.length) {
        throw new Error("Number greater than array length");
    }
    return arr[first] + arr[second];
}
try {
    var res = umSliceArray([1,3,4,5,2],2,2);
    console.log(res);
} catch (error) {
    console.log(error.message);
   
    
}

