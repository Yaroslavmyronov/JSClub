"use strict";
function calc(a, b, op) {
    switch (op) {
        case 1:
            return a - b;
            
        case 2:
            return a * b;
            
        case 3:
            return a / b;
            
        default:
            return a + b;
    }
}

