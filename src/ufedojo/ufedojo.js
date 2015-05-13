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
