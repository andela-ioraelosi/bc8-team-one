console.log("imoh")

/*
14 ---------- numbers
-80 --------- numbers
8.5 --------- numbers
true -------- booleans
(5 < 17) ---- booleans
null -------- undefined
3.142 ------- numbers
"pi" -------- strings
67+18 ------- function
*/



//convert number to base 2
var base2converter = function(number) {
	var i = parseInt(number, 10).toString(2);
	return(i)

}
base2converter(60);

var score = 180;
printGrade = function(score) {

	if ( (score <= 100) && (score >= 0)) {
		if(score >= 70) {
			return(score+" is A")

		} else if (score >= 50) {
			return(score+" is B")

		} else {console.log(score+" is C")}

	}
    else {
    	return ("Enter Valid number")
}
}
printGrade(100)

var score = 180;



countB = function(string, letter) {
    var count = 0;
    for (var i = 0; i< string.length; i++) {
        if(string.charAt(i) == letter) {
            ++count;            
            }
          }
     return(count)
    };
countB("We count Bs and bs", "B")