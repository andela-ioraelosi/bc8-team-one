//Fibonacci Series
var a=[];
var sum = 0;
var fibo = function(n){
  //Base cases to build the sequence
  sum = 0;
  console.time('sum');
  if (n === 0) return 0;
  if (n === 1) return 1;
  if(n in a){
    return a[n];
  }
  else {
   return  a[n] = (fibo(n-1)+fibo(n-2));
  
  }
}
console.time("sum");
for (var i= 0; sum < 4000000; i++){
    var f = fibo(i);
  if (f % 2 === 0) {
    sum += f;
    console.log("sum is: ", sum);
  };
}
console.log(fibo(1000));
console.timeEnd('sum');
console.log(sum);