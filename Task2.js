"use strict";
function createArrayIterator(array) {
    var counter = 0;
    return function() {
        counter++;
        return array[counter - 1];
    };
    
 }

 var arr = [5, 3, 7];
 var itr = createArrayIterator(arr);
 console.log(itr()); // 5
 console.log(itr()); // 3
 console.log(itr()); // 7
 console.log(itr()); // undefined