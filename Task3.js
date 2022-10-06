var arr = [];

for (var i = 0; i <= 2; i++) {
   arr[i] = local(i);
}

function local(i) {
   return function () {
      console.log(i);
   };
   
}
arr[0](); // 0
arr[arr.length - 1](); // 2







