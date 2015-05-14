console.log("Ore Olarewaju");

/*Activity One (data types)

what data types:
14 = Number
-80 = Number
8.5 = Number
true = Boolean
(5 < 17) = Boolean
null = Undefined
3.142 = Number
"Pi" = String
67+18== Number*/


//Activity 2
var binary = function (number){
	var quotient = number;
	var remainder = [];
	do{
		remainder.push (quotient % 2);
		quotient = Math.floor(quotient / 2);
	}
	   while (quotient >= 1){
	   console.log(remainder.reverse().join(""));
		 }
}
	
		binary(200);
		


 //Activity 3
function countChar(string, letter)
{
	var letter = letter;
  var counter = 0;
  for (var i = 0; i < (string.length); i++)
    {
      if (string.charAt(i) === letter)
        {
          counter++;
        }
    }
  
  return counter;
}

function countBs(string)
{
  var letter = "B";
  var counter = 0;
  for (var i = 0; i < (string.length); i++)
    {
      if (string.charAt(i) === letter)
        {
          counter++;
        }
    }
  
  return counter;
}

console.log(countBs("BABAbAbaB"));
console.log(countChar("Bbazzzooookkkkka", "a"));

//Fibonacci Series
var fibonacci = function(n) {
  var t = [];
  for( var i=0; i < n; ++i){
       t.push((i<2) ? i : t[i - 1] + t[i - 2]);
       }
      return t;
    }
console.log(fibonacci(70));
