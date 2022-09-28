var arr = [2,2,2,1];
for (i=0;i<arr.length;i++){
    if (arr[i]===arr[i+1]||arr[i]===arr[i-1]||arr[i]===arr[i+2]||arr[i]===arr[i-2]){
        continue;
    }else{
        console.log("Порядковий номер числа: " + i);
    }
}