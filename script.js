"use strict";

function digitSum(k){
    var number = k % 10;
    if (k > 0) {
        return number + digitSum((k - number) / 10);
    }else {
        return number;
    }
}

