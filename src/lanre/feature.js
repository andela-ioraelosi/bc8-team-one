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
 var binaryConverter = function (number) {

     var reverseNumber = [];

     do {
         reverseNumber.push(number % 2);
         number = Math.floor(number / 2);
         return(number);

     } while (number >= 1)

     return (reverseNumber.reverse().join(''));

 }

 binaryConverter(50);

 //Activity 3
 var countChar = function (string, letter) {
     var letter = letter;
     var counter = 0;
     for (var i = 0; i < string.length; i++) {
         if (string.charAt(i) === letter) {
             counter++;
         }
     }

     return counter;
 }

 var countBs = function (string) {
     var letter = "B";
     var count = 0;
     for (var i = 0; i < (string.length); i++) {
         if (string.charAt(i) === letter) {
             count++;
         }
     }

     return count;
 }


 //activity 4 fibernacci

 var numItems = function (num) {
     var number = [2, 3]
     for (var i = 0; i < (num - 2); i++) {
         number.push(number[i] + number[i + 1]);

     }
     return(number);
 };
 numItems(prompt("enter a number"));

 // fibernacci recussively

 var fibo = function (num) {
     if (num == 0) return 0;
     if (num == 1) return 1;

     return fibo(num - 1) + fibo(num - 2);

 }

 var fibonacci = function (n) {
     for (var i = 0; i <= n; i++) {
         return(fibo(i))
     }
 }
 fibonacci(8)

 //factorial recussively
 var factorial = function (number) {
     if (number === 0) {
         return 1
     } else {
         return number * factorial(number - 1);
     }
 }