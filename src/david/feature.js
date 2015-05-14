 console.log("david");

/*
14= number
-80= number
8.5 = number
true -- boolean
(5 < 17) -- boolean
null undefined
3.142 -- number
"Pi"-- string
67+18 = number
*/

//convert number to base 2 
var base2converter = function(number) {
    var i= parseInt(number, 10).toString(2);
    return i;
		
}
base2converter(60);


var score= 180;
printGrade= function(score) {
	 
if ( (score <= 100) && (score >= 0)) {
	if (score >= 70) {
	console.log(score+" is A")

	} else if (score >= 50) {
		console.log(score+ " is B")

	} else {console.log(score+ " is C")}

}

else {
	console.log ("Enter Valid number")
}
}
printGrade(180)

//B Counter
var countB = function(string) {
    var count = 0;
    for (var i=0; i< string.length; i++) {
        if(string.charAt(i) == "B") {
            ++count;            
            }
          }
     console.log(count)
    };
countB("We count BBs and bs")

//countChar
var countChar = function(string, letter) {
    var count = 0;
    for (var i=0; i< string.length; i++) {
        if(string.charAt(i) == letter) {
            ++count;            
            }
          }
     console.log(count)
    };
countChar("We count Characters and characters", "c")




//FizzBuzz test
var FizzBuzz = function(number) {
	if (number % 3 === 0) {
		if (number % 5 === 0) {
			console.log("FizzBuzz")
		}
		else {
			console.log("Fizz")
		}
	}

	else if (number % 5 === 0) {
		console.log("Buzz")
	}
else {
	console.log(number)
}
}

FizzBuzz(7);

//Finding the nth Number in FIb Series

var findNth = function(nth) {
    var a = 0, b = 1 ;
    for(var i = 0; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
};



