var arr =[];
var sum = 0;
for (var i=0;i<4;i++){
    arr[i]=prompt("Введите только цифры","");
    if (arr[i] === null||arr[i]===""||isNaN(arr[i])){
        break;
    }else{
        sum += +arr[i];
    }
}
console.log(sum);


