"use strict";
var tv = {
    currentChannel:1,
    nextChannel: function () {
        tv.currentChannel++;
    },
    previousChannel: function () {
        tv.currentChannel--;
    },
    setChannel: function (number) {
        tv.currentChannel = number;
    }
};
