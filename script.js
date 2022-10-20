"use strict";

var calculator = {
    read: function() {
       this.a = +prompt("Введите первое число", "");
       this.b = +prompt("Введите второе число", "");
    },
    sum: function() {
        return this.a + this.b;
    },
    mul: function() {
        return this.a * this.b;
    }

    
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());