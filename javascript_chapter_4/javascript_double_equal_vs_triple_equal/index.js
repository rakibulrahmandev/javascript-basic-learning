//? javascript double equal vs triple equal --------------------------------------------------------------------------------------->

//! #problem-1 ------------------------------------------------------------------------------------->
//* You have 50 taka, and your friend has "50" taka (as a string). Write a program and see what the output will be if you give 50 == "50" and if you give 50 === "50".

const iHave = 50;
const friHas = "50";

// checking with double equal (==);
console.log(iHave == friHas); // output: true; because double equal (==) just check the variable value;

// checking with triple equal (===);
console.log(iHave === friHas); // output: false; because triple equal (===) check the variable value and data type;

//! #problem-2 ------------------------------------------------------------------------------------->
//* You have written "JavaScript" in your programming notebook, and it is a string type data. Now you want to see what the output will be if you give "JavaScript" == 'JavaScript' and "JavaScript" === 'JavaScript'. Explain why the same output is given.

const writeJavascriptDoubleQuotation = "JavaScript";
const writeJavascriptSingleQuotation = 'JavaScript';

// checking with double equal (==);
console.log(writeJavascriptDoubleQuotation == writeJavascriptSingleQuotation); // output: true;

// checking with triple equal (===);
console.log(writeJavascriptDoubleQuotation === writeJavascriptSingleQuotation); // output: true;

// When checking with double equal (==), it compares the values only, and since both values are "JavaScript" (string), the output is true.
// When checking with triple equal (===), it checks both value and data type. Since both values are strings, and the data types are also the same, the output is true.
/*
    In JavaScript, both single quotation ('') and double quotation ("") represent string data types. So, when we check with double equal (==), it only checks the value, which is the same. And when we check with triple equal (===), it checks both the value and data type. Since both are string types, the output is also true.
*/

//! #problem-3 ------------------------------------------------------------------------------------->
//* Write a program, and write a comment explaining what output will be produced if 25 == "25" and 25 === "25" between 25 and "25".

const num1 = 25;
const num2 = "25";

// checking with double equal (==);
console.log(num1 == num2); // output: true;

/*
Explanation:
Double equal (==) only checks the value. Since both 25 (number) and "25" (string) have the same value, JavaScript converts the string to a number and the output becomes "true".
*/

// checking with triple equal (===);
console.log(num1 === num2); // output: false;

/*
Explanation:
Triple equal (===) checks both **value and data type. 25 is a number, and "25" is a string, so the output is "false".
*/

//! #problem-4 ------------------------------------------------------------------------------------->
//* If you compare "apple" and "apple", what will be the output of "apple" == "apple" and "apple" === "apple".

const compareFastStr = "apple";
const compareSecondStr = "apple";

// checking with double equal (==);
console.log(compareFastStr == compareSecondStr); // output: true;

/*
Explanation:
Double equal (==) checks only the value. Since both "apple" and "apple" are the same value, the output is "true".
*/

// checking with triple equal (===);
console.log(compareFastStr === compareSecondStr); // output: true;

/*
Explanation:
Triple equal (===) checks both value and data type. Both "apple" and "apple" are strings and have the same value. So, the output is also "true".
*/

//! #problem-5 ------------------------------------------------------------------------------------->
//* Write a program to see what the output will be for "test" == "TEST" and "test" === "TEST" between "test" and "TEST".

const smallLetterTest = "test";
const capitalLetterTest = "TEST";

// checking with double equal (==);
console.log(smallLetterTest == capitalLetterTest); // output: false;

/*
Explanation:
Double equal (==) checks only the value. Since "test" and "TEST" are not the same due to **case sensitivity, the output is "false".
*/

// checking with triple equal (===);
console.log(smallLetterTest === capitalLetterTest); // output: false;

/*
Explanation:
Triple equal (===) checks both value and data type. The value "test" (small letter) and `"TEST"` (capital letter) are different, so the output is also "false".
*/

//! #problem-6 ------------------------------------------------------------------------------------->
//* If variableX has the value 15 and variableY has the value "20", what will be the output of variableX != variableY and variableX !== variableY?

const x = 15;
const y  = "20";

// checking with double equal (==);
console.log(x != y); // output: true;

/*
Explanation:
Double not equal (!=) only checks the value. Since 15 and "20" are **not equal, the output is "true".
*/

// checking with triple equal (===);
console.log(x !== y); // output: true;

/*
Explanation:
Triple not equal (!==) checks both value and data type. 15 is a number, and "20" is a string, so the output is "true".
*/

//! #problem-7 ------------------------------------------------------------------------------------->
//* The value of variableA is "hello" and the value of variableB is "Hello". Now write a program to check if variableA == variableB and variableB and variableA === variableB.

const a = "hello";
const b = "Hello";

// checking with double equal (==);
console.log(a == b); // output: false;

/*
Explanation:
Double equal (==) only checks the value. Since "hello" and "Hello" are not the same due to case sensitivity, the output is "false".
*/

// checking with triple equal (===);
console.log(a === b); // output: false;

/*
Explanation:
Triple equal (===) checks both value and data type. The values "hello" and "Hello" are different because JavaScript is case-sensitive, so the output is also "false".
*/