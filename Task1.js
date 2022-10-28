"use strict";

function GeometricFigure(x, y, z) {
    this.__x = x;
    this.__y = y;
    this.__z = z;

}

GeometricFigure.prototype.__numberValid = function() {
    for (var i = 0; i < arguments.length; i++) {
        if (typeof(arguments[i]) !== 'number') {
            return false;
        }
    }
    return true;
};

GeometricFigure.prototype.getCoordsX = function() {
    return this.__x;
};

GeometricFigure.prototype.getCoordsY = function() {
    return this.__y;
};

GeometricFigure.prototype.getCoordsZ = function() {
    return this.__z;
};

GeometricFigure.prototype.setCoordsX = function(number) {
    if (this.__numberValid(number)) {
        this.__x = number;
    }
};

GeometricFigure.prototype.setCoordsY = function(number) {
    if (this.__numberValid(number)) {
        this.__y = number;
    }
};

GeometricFigure.prototype.setCoordsZ = function(number) {
    if (this.__numberValid(number)) {
        this.__z = number;
    }
};



var geometricFigure = new GeometricFigure();


function Rectangle(diagonal, x, y, z) {
    GeometricFigure.call(this, x, y, z);
    this.__diagonal = diagonal;
}

Rectangle.prototype = Object.create(GeometricFigure.prototype);

Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.getDiagonal = function() {
    return this.__diagonal;
};
Rectangle.prototype.setDiagonal = function(diagonal) {
    this.__diagonal = diagonal;
};
Rectangle.prototype.info = function() {
    console.log("x: " +  this.__x,"\ny: " + this.__y, "\ny: " + this.__z, "\ndiagonal: " + this.__diagonal);
};

var rectangle = new Rectangle();


function Circle(radius, x, y, z) {
    GeometricFigure.call(this, x, y, z);
    this.__radius = radius;
}

Circle.prototype = Object.create(GeometricFigure.prototype);

Circle.prototype.constructor = Circle;
Circle.prototype.getDiagonal = function() {
    return this.__radius;
};
Circle.prototype.setDiagonal = function(radius) {
    this.__radius = radius;
};
Circle.prototype.info = function() {
    console.log("x: " +  this.__x,"\ny: " + this.__y, "\ny: " + this.__z, "\ndiagonal: " + this.__diagonal + "\nradius: " + this.__radius);
};

var circle = new Circle();

