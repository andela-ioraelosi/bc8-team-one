console.log('Ufedojo D Opaluwa');
/*
Activity One (data types)
==========================

what data type:

14 ------------------ number
-80 ------------------ number
8.5 ------------------ number
true ------------------ boolean
(5 < 17) ------------------ boolean
null ------------------ undefined
3.142 ------------------ number
"Pi" ------------------ string
67+18 ------------------ number
*/

/*****************************
DECIMAL TO BINARY
*****************************/
var decToBin = function(decValue){
	if(isNaN(decValue)){
		console.log("Entry is not a number");
	}
	//notifies user that argument is not valid 
	else {
		var binValue = "";
		var power = 0;

		while(Math.pow(2,power)<decValue){
			power++;
		}
		//above blocks find the nearest 2^n to decValue

		while(power>=0){
			if(decValue >= Math.pow(2,power)){
				binValue+="1";
			} else if(decValue<Math.pow(2,power)) {
				binValue+="0";
			}	
			 decValue = decValue % Math.pow(2,power);
			 power--;
		}
	 
	 	}
return binValue;
};

/*****************************
ACTIVITY THREE
*****************************/

var countBs = function(word){
	var letterCount = 0;
	for(var i = 0; i < word.length; i++){
		if(word.charAt(i) === 'B')
			letterCount++;
	}
return letterCount;
}

var countChar = function(word, character){
	var letterCount = 0;
	for(var i = 0; i < word.length; i++){
		if(word.charAt(i) === character)
			letterCount++;
	}
return letterCount;	
}


//rewritting countBs to use countChar

var countBs = function(word){
	return countChar(word,'B');
}

/*****************************
FIBONACCI SEQUENCE
*****************************/
var fibonacci = function(seqLength) {
	var sequence = [2,3];
	if(seqLength == 1){
		return sequence[0];
	}
	else if(seqLength == 2){
		return [2,3] ;
	}
	else{
		for(var i = 3; i <= seqLength; i++){
			var nextNum =(sequence[i-3] + sequence[i-2]);
			sequence.push(nextNum);
		}
		return sequence.toString();
	}
}; 
fibonacci(4);

//REVISED FIBONACCI
var fibonacci = function(seqLength) {
	var a = b = 1;
	var c = 0;
	for (var i = 0; i < seqLength; i++){
		c = a + b;
		a = b;
		b = c;
		console.log(c);
	}
}; 
fibonacci(4);



/*****************************
RECURSION factorial
*****************************/	

var factorial = function(N){
	if(N == 0){
		return 0;
	}
	else if(N == 1){
		return 1;
	}
	else{
		return N * factorial(N-1);
	}
};
factorial(5);



