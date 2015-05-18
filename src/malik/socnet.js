//Log your name
console.log("Abdulmalik Yusuf");


/*Activity One (data types)
=========================

14 === Number
-80 === Number
8.5 === Number
true === Boolean
(5 < 17) === Boolean
null === Undefined
3.142 === Number
'Pi' === String
67+18 === Number
*/

// Code that converts Integers into Binary numbers
var convertToBinary = function(number) {
  var quotient = number;
  var remainder = [];

  do {
    remainder.push (quotient % 2);
    quotient = Math.floor(quotient / 2);
    console.log(quotient);
  }
  while (quotient >= 1) {
    console.log(remainder.reverse().join(''));
  }
}

var x = 20;
convertToBinary();
console.log(x.toString(2));


//Code to print student grades
var printGrade = function(x) {;

if (x >= 70 && x <= 100) {
  console.log(x+' is A');
}  
else if (x >= 50 && x < 70) {
  console.log(x+' is B');
}
else if (x >= 0 && x <= 49) {
  console.log(x+' is C');
}
else {
  console.log('Provide numbers between 0 and 100');
}
};

printGrade();

// Activity (2)  Code that returns the number of letter "B"
var countBs = function (string) {
  var x = "B";
  var y = 0;
  for (var i = 0; i < (string.length); i++){
    if (string.charAt(i) === x) {
      y++;
    }
  }
  return y;
};

countBs();


//Activity (3)
var countChar =function(string, letter) {
  var letter = letter;
  var y = 0;
  for (var i = 0; i < (string.length); i++) {
    if (string.charAt(i) === letter) {
          y++;
    }
  }
  
  return y;
};

countChar();