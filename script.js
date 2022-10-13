"use strict";
function create(string) {
    return function() {
        if (string === arguments[0]) {
            return true;
        }else {
            return false;
        }
    };
}
var tom = create("pass_for_Tom");

console.log(tom("pass_for_tom")); //false
console.log(tom("pass_for_Tom")); //true
