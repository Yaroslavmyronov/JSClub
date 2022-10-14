"use strict";
function create_account (user_name, password, secret_words) {
    var splitPassword = password.split("");
    var upperCount = 0;
    var lowerCount = 0;
    var symbolCount = 0;
    var numberCount = 0;
    var checkSecretWords;

    for (var i = 0; i < splitPassword.length; i++) {

        if (splitPassword[i].toUpperCase() === splitPassword[i].toLowerCase() && isNaN(splitPassword[i])) {
            symbolCount++;
        }else if (splitPassword[i].toUpperCase() === splitPassword[i].toLowerCase() && !isNaN(splitPassword[i])) {
            numberCount++;
        }
        else if (splitPassword[i] === splitPassword[i].toUpperCase()) {
            upperCount++;
        }else {
            lowerCount++;
        }

    }

    if (!(splitPassword.length >= 6 && upperCount >= 1 && lowerCount >= 1 && symbolCount >= 1 && numberCount >= 1)) {
        return null;
    }

    return function check() {

        if (((secret_words[0] === arguments[1][0] || secret_words[0] === arguments[1][1]) || (secret_words[1] === arguments[1][0] || secret_words[1] === arguments[1][1] )) && secret_words.length === arguments[1].length ) {
            checkSecretWords = true;
        }else {
            checkSecretWords = false;
        }

        if (password === arguments[0]  && checkSecretWords === true) {
            return true;
        }else {
            return false;
        }
    };
}

create_account("Tom", "Qwerty1", ["1", "word"]); //повертяє null 

var tom = create_account("Tom", "Qwerty1_", ["1", "word"]);   
tom("Qwerty1_",  ["1", "word"]); //повертає true 
tom("Qwerty1_",  ["word"]); //повертає  false, бо довжини секретных слів різні ["1", "word"] та ["word"]
tom("Qwerty1_",  ["word", "12"]); //повертає true
tom("Qwerty1!",  ["word", "1"]); //повертає false, бо"Qwerty1!" не дорівнює "Qwerty1_"