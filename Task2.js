"use strict";

var salaries = {
    Cris: 150,
    Brain: 600,
    John: 300,
    Steve: 400,
    Bill: 50,
};

var getMaxKey = function(obj) {
    var arr = [];
   
    for (var key in obj) {
        arr.push(obj[key]);
    }
    arr.sort(sortInAscendingOrder);
    return arr[arr.length-1];
};
console.log(getMaxKey(salaries));


function sortInAscendingOrder(a, b) {
    if (a > b) {
    return 1;
    } else if (b > a) {
    return -1;
    } else {
    return 0;
    }
}