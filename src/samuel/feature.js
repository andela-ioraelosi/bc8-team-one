console.log("Awolumate Samuel");
console.log("I am ThirdSamuel");

/*14 - number
-80 - number
8.5 - number
true - boolean
(5 < 7) - boolean
null - unidentified
3.142 - number
"pi" - string
67 + 18 - number
*/

//CONVERTING BINARY TO DECIMAL
function DecimalToBinary(DecimalValue){
		
		var BinaryValue = '';
		// Loop from 2^64/2 to 1
		
		for (var i = 64; i > = 1; i--){
			// Is 2^i/2 within DecimalValue?
			
			if (DecimalValue >= Math.pow (2,i) / 2){
				// If so, add a 1 to BinaryValue and subtract 2^i/2 from DecimalValue
				BinaryValue = BinaryValue + '1';
				DecimalValue = DecimalValue - (Math.pow (2,i) /2);
			}
			else if (BinaryValue.indexOf("1") != -1){
				// If not, add a 0, but only if there is already a 1 in the value
				BinaryValue = BinaryValue +'0';
			}
		}
		return BinaryValue;
	};


	function BinaryToDecimal(BinaryValue){
		var DecimalValue = 0;
		// Flip the character array (aka string) in order to make itterating over it easier
		BinaryValue = BinaryValue.split("").reverse().join("");
		// Loop over BinaryValue (from left to right)
		for (var i=BinaryValue.length-1;i>=0;i--){
			// Is there a 1 in the place?
			if(BinaryValue[i] == '1'){
				// If so, add 2^i/2 to DecimalValue
				DecimalValue = DecimalValue + (Math.pow(2,i+1)/2);
			}
		}
		return DecimalValue;
	};


	//ASSIGNMENT 3
	/*var countBs = function(proteins) {
	var num = 0;
	for (var i = 0; i < proteins.length; i++){
		if (proteins.charAt(i) === "B"){
			num ++;
		}
	} console.log(num)
}
countBs("My Best Food")

var countChar = function (proteins, checkthis){
var num = 0;
	for (var i = 0; i < proteins.length; i++){
		if (proteins.charAt(i) === checkthis){
			num ++;
		} 

	} console.log(num)
}
countChar("My Best Food", "m");
*/
//Exercice 4

var looping = function(nextnum) {
    var a = b = 1; n = 2
    for(var i = 0; i <= nextnum; i++) {
        n = a + b; a = b; b = n;
      console.log(n);
    }
 
};
   
   looping(15);


//Exercise 5
function factorial(num)
{
    // If the number is less than 0, reject it.
    if (num < 0) {
        return -1;
    }
    // If the number is 0, its factorial is 1.
    else if (num == 0) {
        return 1;
    }
    // Otherwise, call this recursive procedure again.
    else {
        return (num * factorial(num - 1));
    }
};

//This can also be written as this

function factorial(n)
{
	var loop, answer;
	answer = 1;

	for(loop = 1; loop <= n; loop++)
	{

		answer = answer * loop;		

	}

	return answer;
}; //Both will run


// I HOPE THIS CODES ARE BETTER SCRIPTED COMPARE TO THAT OF YESTERDAY?