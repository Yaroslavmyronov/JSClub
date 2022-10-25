"use strict";

var user = {
    name: "Tom",
  };
  function format(beginMsg, endMsg) {
    console.log(beginMsg + this.name + endMsg);
  }
  var tomFormat = function() {
    format.call(user, arguments[0], arguments[1]);
  };// Ваш код
  tomFormat( "<<<", ">>>"); // "<<<Tom>>>"

var user = {
    name: "Tom",
};
function format(beginMsg, endMsg) {
    console.log(beginMsg + this.name + endMsg);
}
var tomFormat = format.bind(user);// Ваш код
tomFormat("<<<", ">>>"); // "<<<Tom>>>"