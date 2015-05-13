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
	var i= parseInt(number, 10).toString(2);
	console.log(i)

}
base2converter(60);


var score= 180;
printGrade= function(score) {

	if ( (score <=100) && (score >= 0)) {
		if(score >= 70) {
			console.log(score+" is A")

		} else if (score >= 50) {
			console.log(score+" is B")

		} else {console.log(score+" is C")}

	}
    else {
    	console.log ("Enter Valid number")
}
}
printGrade(100)


var score= 180;


FizzBuzz = function(number) {

    if ( number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz"
    }
  else if (number % 3 === 0)
  {
        return "Fizz"
  }
  else if (number % 5 === 0) 
  {
        return "Buzz"
  }
  else 
  {
        return number
  }
};
 
FizzBuzz(180)