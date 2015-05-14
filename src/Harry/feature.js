
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
67+18 --------------- Number */


//Activity two//
var convertToBinary = function(decValue){
var result = [];
	while (decValue){
var remainder = decValue % 2;
		result.push(remainder)
		decValue= (decValue/2) | 0;
}
result.reverse()
return result.join("");
}
 
console.log(convertToBinary(10));


//Activity three//

/*var countsB = function(x) {
	var counter = 0;
		for (var i=0; i < x.length; i++) {
			if (x.charAt(i) === "B") 
				counter++;}
return counter;
}
Console.log()

var countChar = function(x, y) {
var counter = 0;	
	for (var i = 0, i < word.length; i++) {	
		if (x.charAt(i) === y) {
			counter++;}
	}return counter;
	}; 

var countsB =function(word){
	return countChar(word, 'B')
}
var seq = function (n)
var result= [];
for (var i= 0;j=1;k= 0; i < n; i=j;j=k;k++){
    x=i+j;
     result.push(x);
}
return result
}
   
}
console.log(seq(5));
*/

/*var fib= function(num){
var (p=c=1, n=0);
for (var i=0 i< num; i++){
	n=p+c;p=c;c=n;console.log(n)
	}
	fib(6)	)*/

	
//recursive exercise
var factorial = function(numb) {
    
    if(i == numb); {
        return numb{ 
    else {
    	      return numb *=i;
    }
}
 

