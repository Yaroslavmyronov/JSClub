"use strict";
var perimeter = (function () {
    var firstSide;
    var secondSide;
    function operation () {
        return (firstSide + secondSide) * 2;
    }
    var numberValid = function (number) {
        if (typeof(number) === "number" && number > 0) {
            return number;
        }
    };
    return {
        setFirstSide: function (number) {
            if(numberValid(number)) {
                firstSide = number;
            }
        },
        setSecondSide: function (number) {
            if(numberValid(number)) {
                secondSide = number;
            }
        },
        operation: function () {
            return operation();
        }
    };
} ());

perimeter.setFirstSide(2);
perimeter.setSecondSide(3);
console.log(perimeter.operation());

var square = (function () {
    var firstSide;
    var secondSide;
    function operation () {
        return firstSide * secondSide;
    }
    var numberValid = function (number) {
        if (typeof(number) === "number" && number > 0) {
            return number;
        }
        
    };
    return {
        setFirstSide: function (number) {
            if(numberValid(number)) {
                firstSide = number;
            }
        },
        setSecondSide: function (number) {
            if(numberValid(number)) {
                secondSide = number;
            }
        },
        operation: function () {
            return operation();
        }
    };
} ());

square.setFirstSide(1);
square.setSecondSide(2);
console.log(square.operation());