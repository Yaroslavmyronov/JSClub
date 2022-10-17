"use strict";
function averageSalary (salaries) {
    var allSalaries = 0;
    var counter = 0;

    for (var key in salaries) {
        counter++;
        allSalaries += salaries[key];
    }
    return allSalaries / counter;
}

