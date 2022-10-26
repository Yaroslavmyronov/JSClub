"use strict";

function Adder() {
    this.__firstNumber = 0;
    this.__secondNumber = 0;
    this.result = 0;
    
}

Adder.prototype.__calc = function() {
    this.result = this.__firstNumber + this.__secondNumber;
};

Adder.prototype.__numberValid = function() {
    for (var i = 0; i < arguments.length; i++) {
        if (typeof(arguments[i]) !== 'number') {
            return this.result;
        }
    }

    return true;
    
};

Adder.prototype.numberFirst = function(number) {
    if (number === undefined) {
        return  this.__firstNumber;
    } else {
        if (this.__numberValid(number)) {
            this.__firstNumber = number;
            this.__calc();
        }
    }
};

Adder.prototype.numberSecond = function(number) {
    if (number === undefined) {
        return  this.__secondNumber;
    } else {
        if (this.__numberValid(number)) {
            this.__secondNumber = number;
            this.__calc();
        }
    }
};

var adder = new Adder();


