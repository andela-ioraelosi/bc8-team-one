//Fibonacci Series
var fibonacci = function(n) {
  var t = [];
  for( var i=0; i < n; ++i){
       t.push((i<2) ? i : t[i - 1] + t[i - 2]);
       }
      return t;
    }
console.log(fibonacci(70));