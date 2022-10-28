"use strict";

function Square(side) {
    this._side = side;
}

Square.prototype.getSideSquare = function() {
    return this._side;
};

Square.prototype.setSideSquare = function(side) {
    this._side = side;
};

Square.prototype.perimeter = function() {
    return 4 * this._side;
};

var square = new Square(2);


function Cube(side) {
    Square.call(this);
    this._side = side;
}

Cube.prototype = Object.create(Square.prototype);
Cube.prototype.constructor = Cube;
Cube.prototype.getSideCube = function() {
    return this._side;
};
Cube.prototype.setSideCube = function(side) {
    this._side = side;
};
Cube.prototype.perimeter = function() {       
    return 12 * this._side;                // Без розширення
};

Cube.prototype.perimeter = function() {
    Square.prototype.perimeter.call(this);  // З розширенням
    return 12 * this._side;
};

var cube = new Cube(2);

// cube.setSideCube();
console.log(cube.perimeter());
console.log(square.perimeter());