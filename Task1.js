"use strict";
//1Варiант
function pow(x, n) {
    var result = x;
    for (var i = 1; i < n; i++) {
        result *= x;
    }
    return result;   
}
//2Варiант
function pow(x, n) {
    return x**n;
}
