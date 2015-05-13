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
		 x = (x/2) | 0;						//get the new value for x
	} 
	result.reverse();						// reverse the order of the array
	return result.join("");					// join the elements of the array and return the result as string
};

console.log(convertToBinary(5));			//converts 5 from decimal to binary


countBs = function(x) {
	if (typeof(x) === "string" ) {
		for (var i=0, max=x.length, count = 0; i<max; i++) {
			if (x.charAt(i) === "B") {
				count++;
			}
		}
		return count;
	} else {
		return "Input is not a string";
	}
};

console.log(countBs("BBBdghjkBB"));



countChar = function(x, y) {
	if (typeof(x) === "string" && x.indexOf(y) !== -1) {
		for (var i=0, max=x.length, count = 0; i<max; i++) {
			if (x.charAt(i) === y) {
				count++;
			}
		}
		return count;
	} else {
		return "Inputs not permitted";
	}
};

console.log(countChar("BBBdghjkBB", "j"));




countBs2 = function(x) {
	return countChar(x, "B");
}

console.log(countBs2("BBBdghjkBB"));
