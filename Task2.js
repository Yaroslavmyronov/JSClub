"use strict";
//1.Стандартний;
var car = {};
car.model = "Mercedes-Benz";
car.speed = 360;
car.run = function () {
    console.log(car.model + " їде зі швидкістю " + car.speed);
};

car.stop = function () {
    console.log(car.model + " зупинилася");
};

//2.Масивів;
var car = {};
car["model"] = "Mercedes-Benz";
car["speed"] = 360;
car["run"] = function () {
    console.log(car["model"] + " їде зі швидкістю " + car["speed"]);
};

car["stop"] = function () {
    console.log(car["model"] + " зупинилася");
};

//3.Спрощений.
var car = {
    model: "Mercedes-Benz",
    speed:360,
    run: function () {
        console.log(car.model + " їде зі швидкістю " + car.speed);
    },
    stop: function () {
        console.log(car.model + " зупинилася");
    }
};

