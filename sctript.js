"use strict";

var perimeter = {
    x1: 2,
    y1: 3,
    x2: 4,
    y2: 3,
    toString: function () {
        return "x1: " + this.x1  + "\ny1: " + this.y1 + "\nx2: " + this.x2 + "\ny2: " + this.y2;    
    },
    valueOf: function() {
        var firstSide = 2;
        var secondSide = 3;
        return 2 * firstSide + 2 * secondSide;
    }
};


