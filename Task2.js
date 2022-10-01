var number = 2194;
var numberLength = (number+"").length;
var arr = [];
var counter = 0;
while (counter<numberLength){
    var sliceNumber = 0;
    sliceNumber = number%10;
    arr.push(sliceNumber);
    number = (number/10)-(sliceNumber/10);
    counter++;
}
console.log(arr);


 
  

    

   

