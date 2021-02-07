//fibonacci activity corrected//
var fib = function(num){
	var seq = [];
	var p = 1;
	var c = 1;
	var n;
  for(var i = 0; i < num; i++ )
	{
		n = p+c;
		p = c;
		c = n;
		seq.push(n);
	}
	return seq;
}

console.log(fib(12));

	// factorial recursion exercise//
var factorial = function(numb) {

	var result = 1;

	while (numb > 0) {

		result *= numb;
		numb--;
		factorial(numb);

	}

	return result;
}


//fibonacci recursion//
var fibo = function (num){
	if (num == 0) return 0;
	if (num ==1)  return 1;
	return fibo(num-2)+ fibo(num-1);
}

var fibonacci = function (N){
	for (i=1; i <= N ; i++)
console.log(fibo(i))
}
fibonacci(6)

