"use strict";

function perimeter(a,b) {
    if (typeof(a) ==='number' && a > 0 && b > 0 && typeof(b) === 'number'){
        return function() {
            return 2 * (a + b);
        };
    }else {
        return 'Error';
    }     
}

var perimeterOne = perimeter(1,2);
console.log(perimeterOne());


function square(a,b) {
    if (typeof(a) === 'number' && a > 0 && b > 0 && typeof(b) === 'number'){
        return function() {
            return a * b;
        };
    }else {
        return 'Error';
    }
    
}

var squareOne = square(1,2);
console.log(squareOne());

