<<<<<<< HEAD
/** 
Activity one (data types)
--------------------------
--------------------------
what data type?
14 ----------------------- Number
-80 ---------------------- Number
8.5 ---------------------- Number
true --------------------- Boolean
(5 < 7) ------------------ Boolean
null --------------------- Undefined
3.141 -------------------- Number
"Pi" --------------------- String
67 + 18 -------------------- Number 
**/


console.log("Prosper Oyibo");				//log my name to console

var convertToBinary = function(decimal) {
	//Converts decimal to binary
	var result = [];						//Initialize result array
	
	while (decimal) {
		 var remainder = decimal % 2;				//get modulus of decimal
		 result.push(remainder);	 			//store the modulus in the result array
		 decimal = (decimal / 2) | 0;						//get the new value for decimal
	} 
	
	result.reverse();						// reverse the order of the array
	return result.join("");					// join the elements of the array and return the result as string
};


var countBs = function(word) {
	
	if (typeof(word) === "string" ) {									//check for input type
		
		for (var i = 0, len = word.length, count = 0; i < len; i++) {	//initialize variables
			
			if (word.charAt(i) === "B") {								//check if the string contains 'B' character
				count++;											//increment count
			}
		}
		return count;

	} else {
		return "Input is not a string";
	}
};


var countChar = function(word, character) {
	if (typeof(word) === "string" && word.indexOf(character) !== -1) {	//check that both inputs are string and character is in word

		for (var i = 0, max = word.length, count = 0; i < max; i++) {	//initialize variables
			
			if (word.charAt(i) === character) {									
				count++;											//increment count
			}

		}
		return count;

	} else {
		return "Inputs not permitted";
	}
};


var countBs2 = function(word) {
	return countChar(word, "B");										//call the function "countChar" with string "B" as the second input
}
=======
console.log("Prosper")
>>>>>>> c8029395ecc693fa6a908580d22e6f802cdd5438
