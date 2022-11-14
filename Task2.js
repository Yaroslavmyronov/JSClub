"use strict";

//1Варiант

function min() {
    var counter = 0;
    var all = arguments.length;
    var minimum = arguments[0];
    while (counter < all) {
        counter++;
        if (minimum > arguments[counter]) {
            minimum = arguments[counter];
        }
    }
    return minimum;
    
}

//2Варiант

function min() {
    var all = arguments.length;
    var minimum = arguments[all - 1];
    while (all--) {
        if (minimum > arguments[all]) {
            minimum = arguments[all - 1];
        }
    }
    return minimum;
}
