var number = 56;
var secondDigit = number%10;
var firstDigit = (number/10)-(secondDigit/10);
console.log('Перша цифра:' + firstDigit, '\nДруга цифра:' + secondDigit);