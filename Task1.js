"use strict";

function Player(sound) {
    this.__sound = 0;

    if (this.__soundValid(sound)) {
        this.__sound = sound;
    }
}

Player.prototype.getSound = function() {
    return this.__sound;
};

Player.prototype.setNumber = function(sound) {
    if (this.__soundValid(sound)) {
        this.__sound = sound;
    }
};

Player.prototype.__soundValid = function(sound) {
    if (sound >= 0 && sound <= 100) {
        return sound;
    }
};

var player = new Player(100);




function Player(sound) {
    this.__sound = 0;

    if (this.__soundValid(sound)) {
        this.__sound = sound;
    }
}

Player.prototype.__soundValid = function(sound) {
    if (sound >= 0 && sound <= 100) {
        return sound;
    }
};

Player.prototype.sound = function(sound) {
    if (sound === undefined) {
        return this.__sound;
    } else {
        if (this.__soundValid(sound)) {
            this.__sound = sound;
        }
    }
};

var player = new Player(120);
