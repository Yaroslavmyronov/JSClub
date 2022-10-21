'use strict';

function mul() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++){
        if (Number.isInteger(arguments[i])){
            result += arguments[i];
        }
        continue;
    }
    return result;
}
console.log(mul(1, 'str', 2, 3, true)); // 6
console.log(mul(null, 'str', false, true)); // 0


// function mul() {
//     var result = 0;
//     return function() {
//         for (var i = 0; i < arguments.length; i++){
//             if (Number.isInteger(arguments[i])){
//                 result += arguments[i];
//             }
//             continue;
//         }
//         return result;
//     };
    
// }

// var mulNumber = mul();
// var mulNotNumber = mul();

// console.log(mulNumber(1, 'str', 2, 3, true)); // 6
// console.log(mulNotNumber(null, 'str', false, true)); // 0