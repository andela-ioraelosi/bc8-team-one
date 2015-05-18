var fibby = function(n) {
  console.time('sum');
  return n === 0 ? 0 :
         n === 1 ? 1 :
         fibby(n-1) + fibby(n-2);
};
var caching = function(a, cach) {
  return function(n) {
    if(!cach[n]) {
      cach[n] = a(n);
    }
    return cach[n];
  };
};
var cach = {};
fibby = caching(fibby, cach);
console.timeEnd('sum');
fibby();