
console.log("Harry");
/*Activity one (data types)
=========================
What data type:

14 ------------------ Number
-80 ------------------ Number
8.5 ---------------- Number
true --------------- Boolean
(5 < 7) ------------------ Boolean
null ------------------ Undefined
3.141 --------------- Number
"Pi" ---------------- String
67+18 --------------- Number 
*/

//Activity two//
var convertToBinary = function(x){

var result = [];
while (x){
	var remainder = x % 2;
	result.push(remainder)
x= (x/2) | 0;
}
result.reverse()
return result.join("");
}
 
console.log(convertToBinary(10));


//Activity three//

countsB = function(x) {
	if (typeof(x) === "string" ) {
		for (var i=0, max=x.length, count = 0; i<max; i++) {
			if (x.charAt(i) === "B") {
				count++;
			}
		}
		return count;
	} else {
		return "input is not a string";
	}
};

console.log(countsB("Boy"));



countChar = function(x, y) {
	if (typeof(x) === "string" && x.indexOf(y) !== -1) {
		for (var i=0, max=x.length, count = 0; i<max; i++) {
			if (x.charAt(i) === y) {
	count++;
		}
		}
	return count;
	} else {
		return "Please enter correct input";
	}
};

console.log(countChar("BuBBle" , "Bath"));

