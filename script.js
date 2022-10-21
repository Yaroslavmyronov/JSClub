"use strict";

function Player(dictaphone, memorySize, size, wirelessConnection, workingHours, batteryCapacity, color) {
    this.dictaphone = dictaphone;
    this.memorySize = memorySize;
    this.size = size;
    this.wirelessConnection = wirelessConnection;
    this.workingHours = workingHours;
    this.batteryCapacity = batteryCapacity;
    this.color = color;
}

var redPlayer = new Player(false, 32, "109 х 72 х 16 мм", "Bluetooth 4.2", 19, 3200, "red");

