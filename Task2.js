"use strict";

function umSliceArray(arr, first, second) {
    while (true) {
        if (typeof(first) !== "number" || typeof(second) !== "number" || first > arr.length || second > arr.length) {
            continue;
        }
        return arr[first] + arr[second];
    }
    
}
var res = umSliceArray([1,3,4,5,2],2,3);

console.log(res);