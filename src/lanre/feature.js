 console.log("Adebayo olanrewaju");


/*activity one (data type)

14 = numnber
-80 = numbed
8.5 =number
true = boolean
(5 < 17) = boolean
null = undefined
3.142 = number
"pi" = string
67 + 18 = number*/


 
 //function converts decimals to binary (activity 2)
 var binaryConverter = function(number){
	
var reverseNumber = [];
	
	do {
		reverseNumber.push(number % 2);
		number = Math.floor(number / 2);
		console.log (number);

	} while(number>=1)
	
	return console.log(reverseNumber.reverse().join(''));

}

binaryConverter(50);

//Activity 3
countChar = function (string, letter)
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

countBs = function (string)
{
  var letter = "B";
  var count = 0;
  for (var i = 0; i < (string.length); i++)
    {
      if (string.charAt(i) === letter)
        {
          count++;
        }
    }
  
  return count;
}

console.log(countBs("BABAA"));
console.log(countChar("Bbazzzooookkkkka", "a"));