//? javascript parse and toFixed practice problem ---------------------------------------------------------------------------------->

//! #problem-1 -------------------------------------------------------------------------------------------->
//* Let's say you're doing a fun math. You write down "20", but it's in string form. Can you convert the string to a real number and add 10 to it?

let mathStr = '20';
let mathStrToNum = parseInt(mathStr);

let totalSum = mathStrToNum + 10;
console.log(totalSum); // output: 30;

//! #problem-2 -------------------------------------------------------------------------------------------->
//* You have a value in fractional form, such as "3.14159". Write a program to convert this value to an integer.

let fracNum = '3.14159';
let fracNumToInt = parseInt(fracNum);

console.log(fracNumToInt); // output: 3;

//! #problem-3 -------------------------------------------------------------------------------------------->
//* Try converting a string called "premikBoy" to a number. See what the output is.

let loverBoy = 'premikBoy';
let loverBoyStrToNum = parseInt(loverBoy);

console.log(loverBoyStrToNum); // output: NaN;

//! #problem-4 -------------------------------------------------------------------------------------------->
//* You added 3.456 and 2.789. You want to see only 2 digits after the decimal point in the output. How would you do that? Write a program.

let fastNum = 3.456;
let secondNum = 2.789;

let additionOfFastNumToSecondNum = fastNum + secondNum;
let outputTwoDigits = additionOfFastNumToSecondNum.toFixed(2);
console.log(parseFloat(outputTwoDigits)); // output: 6.25; 

//! #problem-5 -------------------------------------------------------------------------------------------->
//* Suppose you have "56.78" and "12.34" in string form. Now how do you add these two to get the real number? Write a program to find that.

let fastStrNum = '56.78';
let secondStrNum = "12.34";

let totalNum = parseFloat(fastStrNum) + parseFloat(secondStrNum);
console.log(totalNum); // output: 69.12;

//! #problem-6 -------------------------------------------------------------------------------------------->
//* Suppose you have "10.5678" and "5.4321". You want to see up to 1 place after the decimal point in the output. How would you see that?

let fastSrtNumber = '10.5678';
let secondSrtNumber = '5.4324';

let fastSrtNumberWithOnePlaceAffDec = parseFloat(fastSrtNumber).toFixed(1);
let secondSrtNumberWithOnePlaceAffDec = parseFloat(secondSrtNumber).toFixed(1);

console.log(parseFloat(fastSrtNumberWithOnePlaceAffDec)); // output: 10.6;
console.log(parseFloat(secondSrtNumberWithOnePlaceAffDec)); // output: 5.4

//! #problem-7 -------------------------------------------------------------------------------------------->
//* Now round "42.45689754" to 3 decimal places.

let roundNum = '42.45689754';
let roundNumToThreeDec = parseFloat(roundNum).toFixed(3);

console.log(parseFloat(roundNumToThreeDec)); // output: 42.456;