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

var a=[];
var sum = 0;
var fibo = function(n){
  //Base cases to build the sequence
  sum = 0;
  console.time('sum');
  if (n === 0) return 0;
  if (n === 1) return 1;
  if(n in a){
    return a[n];
  }
  else {
   return  a[n] = (fibo(n-1)+fibo(n-2));
  
  }
}
console.time("sum");
for (var i= 0; sum < 4000000; i++){
    var f = fibo(i);
  if (f % 2 === 0) {
    sum += f;
    console.log("sum is: ", sum);
  };
}
console.log(fibo(1000));
console.timeEnd('sum');
console.log(sum);


