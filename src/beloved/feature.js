console.log ("Habeeb");

//14 ----------- number
//-80 ----------- number
//8.5 ----------- number
//true ----------- boolean
//(5 < 17) ---------- function
//null ------------ undefined
//3.142 ------------ number
//"pi" ------------ string
//67 + 18 ----------- number

//question
//write a program to produce binary values from decimals

var binaryConverter = function(number){
        var reverseBinary = [];
        do{
                reverseBinary.push(number%2);
                number = Math.floor(number/2);
                console.log(number);
        }while(number>=1)
        return console.log(reverseBinary.reverse().join(''));
}
binaryConverter (5)


//write a function countBs that takes a string as its only arguement and returns a number that indicates how many uppercase "B" characters are in the string.

var countBs = function (count) {
	var num = 0;
	for ( var i = 0; i < count.length; i++) {
		if (count.charAt(i) === "B") {
			num ++
		}
		concole.log (num)
	}
countBs ("Blah Blah Blah")
}
/*next, write a function called countchar that behaves like countBs, except it takes a second arguement that indicates the 
character that is to be counted (rather than counting only uppercase "B" characters) rewrute countBs to make use of this new*/

var countChar = function ( count , testCharacter) {
	var number = 0
	for (var i = 0; i < count.length; i++){
		if (count.charAt(i) === testCharacter){
			number ++;
		}
	} console.log(number)
}
countChar("Blah Blah Blah" , "a");

var countBs = function(intro){
	return countChar( intro, "B");
}
countBs("Blah Blah Blah")

///////////////////////////////////

//create a fibonacci sequence

var sequence = [];
sequence [0] = 2
sequence [1] = 3
for ( var i = sequence.length; i <= 10; i++) {
	sequence[i] = sequence[i-2] + sequence [i-1]
}
console.log (sequence)

////////////////////////////

// factorial lab
factorial = function (number) {
  if (number === 0) {
    return 1;
  }
  else{
    return number *= factorial(number-1);
  } 
  number (5)
  console.log (factorial)
}

//////////////////////////////////////////////////

var fibo = function (num) {
if (num === 0) return 0;
if (num === 1) return 1;
return fibo (num - 1) + fibo (num - 2)
}
var fibonacci =function (N) {
	for (i=1; i<=N; i++) {
		console.log (fibo (i))
	}
}
fibo (4)
////////////////////////////////////////

  
   
    
