console.log('Oluwakamiye Adelemoni');

/*
Activity One (data types)
=========================
What data type:

1. 14 = number
2. -80 = number
3. 8.5 = number
4. true = boolean
5. (5<17) = boolean
6. null = undefined
7. 3.142 = number
8. 'pi' = string
9. 67+18 = number
*/







//Question: write a program to produce binary values from decimal.

/*
Solution gotten from Josh's algorithm
*/

var binaryConverter = function(number){
	var reverseBinary = [];
	do{
		reverseBinary.push(number%2);
		number = Math.floor(number/2);
		console.log(number);
	}while(number>=1)
	return console.log(reverseBinary.reverse().join(''));
}

//binaryConverter(50);









// Question count Bs

// OLD COUNT B FUNCTION
/*
var countBs = function(string){
	var numberOfBs = 0;
	if(typeof string !== 'string') return 'Please Enter only a string';
	else {
		for(var i=0; i<string.length; i++)
		{
			if(string.charAt(i)==='B') numberOfBs++;
		}
	}
	return numberOfBs;
}
*/

var countChar = function(string, testChar){
	var numberOfChars = 0;
	if(typeof string !== 'string') return 'Please Enter only a string';
	else {
		for(var i=0; i<string.length; i++)
		{
			if(string.charAt(i)===testChar) numberOfChars++;
		}
	}
	return numberOfChars;
}

// NEW COUNT B FUNCTION
var countBs = function(string){
	return countChar(string, 'B');
}

console.log(countBs('BoBo'));