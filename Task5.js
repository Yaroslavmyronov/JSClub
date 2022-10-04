"use strict";
function digitN(k, n) {
    var numberArr = [];
    while (k) {
        numberArr.push(k % 10);
        k = parseInt(k / 10);
    }
    if (numberArr.length<n) {
            return -1;
        }
        return numberArr[n - 1];
}
