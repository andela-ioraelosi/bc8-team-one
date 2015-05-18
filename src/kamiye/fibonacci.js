var numberOfSequence = function(n){
	var sequenceArray = [2,3];
	var newArrayElement;

	var i = 1; // i is short for iterator
	if(n > 2)
	{
		while(i <= n)
		{
			newArrayElement = sequenceArray[i] + sequenceArray[i-1]
			// add the new element to the sequence array
			sequenceArray.push(newArrayElement);
			// increment iterator
			i++;
		}
		return sequenceArray;
	}
	else
	{
		var sequence = [];
		for(var x = 0; x < n; x++)
		{
			sequence.push(sequenceArray[x]);
		}
		return sequence;
	}
	
};

//console.log(numberOfSequence(8));

// Question: write a program to produce the sequence 2,3,5,8,13,21,34,...

// TOSIN'S SIMPLE SOLUTION

var fibo = function(num){
	var sequence = [];
	var p = 1;
	var c = 1;
	var n;
	for(var i = 0; i < num; i++ )
	{
		n = p+c;
		p = c;
		c = n;
		sequence.push(n);
	}
	return sequence;
};

//console.log(fibo(8));


//QUESTION: REWRITE FIBONACCI FUNCTION WITH CACHED RESULTS


var cache = {};
var fibonacci = function(n){

	//Base cases to build the sequence
	if (n === 0) return 0;
	if (n === 1) return 1;
	else
	{
		if(n in cache) return cache[n];
		else
		{
			cache[n] = fibonacci(n-1)+fibonacci(n-2);
			return cache[n];
		}
	}
};


console.time('fib run time');
console.log(fibonacci(1));

console.timeEnd('fib run time');
