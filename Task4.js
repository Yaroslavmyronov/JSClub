var n = 10;
var factorial = 1;
for (var i = 0;i<n;i++){
    if (n===1 || n===0){
        factorial = 1;
    }else{
        factorial = (n-i)*factorial;
    }
}
console.log(factorial);