"use strict";
var strings = [];
var isFirst = false;
var isLast = false;
var biggestLine = 0;
var biggestNumber = 0;

while (strings[strings.length - 1] !== "end") {
  strings.push(prompt());
}

function createBar() {
  var plus = "+";
  for (var i = 0; i < biggestLine + 2; i++) {
    plus += "-";
  }
  plus += "+";
  for (var j = 0; j < biggestNumber + 11; j++) {
    plus += "-";
  }
  plus += "+";
  console.log(plus);
}

for (var i = 0; i < strings.length - 1; i++) {
  var string = strings[i];
  if (string.length > biggestLine) {
    biggestLine = string.length;
  }
  var number = "";
  for (var j = 0; j < string.length; j++) {
    if (
      string[j].toUpperCase() === string[j].toLowerCase() &&
      !isNaN(string[j])
    ) {
      number += string[j];
    }
    if (j === string.length - 1) {
      if (number.length > biggestNumber) {
        biggestNumber = number.length;
      }
      number = "";
    }
  }
}

for (var i = 0; i < strings.length - 1; i++) {
  var string = strings[i];
  var number = "";
  for (var j = 0; j < string.length; j++) {
    if (
      string[j].toUpperCase() === string[j].toLowerCase() &&
      !isNaN(string[j])
    ) {
      number += string[j];
    }
    if (j === string.length - 1) {
      createBar();
      if (number !== "") {
        var row = "| " + string;
        for (var k = 0; k < biggestLine - string.length; k++) {
          row += " ";
        }
        row += " | Numbers: " + number;
        for (var l = 0; l < biggestNumber - number.length; l++) {
          row += " ";
        }
        row += " |";
        console.log(row);
      } else {
        var row = "| " + string;
        for (var n = 0; n < biggestLine - string.length; n++) {
          row += " ";
        }
        row += " | No Numbers" + number;
        for (var p = 0; p < biggestNumber - number.length; p++) {
          row += " ";
        }
        row += "|";
        console.log(row);
      }
      number = "";
    }
  }
}

createBar();
