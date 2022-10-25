"use strict";
function createPlayer(dictaphone, memorySize, size, wirelessConnection, workingHours, batteryCapacity, color) {
    return {
        dictaphone: dictaphone,
        memorySize: memorySize,
        size: size,
        wirelessConnection: wirelessConnection,
        workingHours: workingHours,
        batteryCapacity: batteryCapacity,
        color: color,
       
    };
}

var redPlayer = createPlayer(false, 32, "109 х 72 х 16 мм", "Bluetooth 4.2", 19, 3200, "red");
console.log(redPlayer);