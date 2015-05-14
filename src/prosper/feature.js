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
67+18 -------------------- Number 
**/


console.log("Prosper Oyibo");				//log my name to console

convertToBinary = function(x) {
	//Converts decimal to binary
	var result = [];						//Initialize result array
	while (x) {
		 var remainder = x % 2;				//get modulus of x
		 result.push(remainder);	 			//store the modulus in the result array
		 x = (x / 2) | 0;						//get the new value for x
	} 
	result.reverse();						// reverse the order of the array
	return result.join("");					// join the elements of the array and return the result as string
};

countBs = function(x) {
	if (typeof(x) === "string" ) {									//check for input type
		for (var i = 0, len = x.length, count = 0; i < len; i++) {	//initialize variables
			if (x.charAt(i) === "B") {								//check if the string contains 'B' character
				count++;											//increment count
			}
		}
		return count;
	} else {
		return "Input is not a string";
	}
};


countChar = function(x, y) {
	if (typeof(x) === "string" && x.indexOf(y) !== -1) {			//check that both inputs are string and y is in x
		for (var i = 0, max = x.length, count = 0; i < max; i++) {	//initialize variables
			if (x.charAt(i) === y) {									
				count++;											//increment count
			}
		}
		return count;
	} else {
		return "Inputs not permitted";
	}
};


countBs2 = function(x) {
	return countChar(x, "B");										//call the function "countChar" with string "B" as the second input
}

