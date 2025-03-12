//? javascript naming conventions practice problems ----------------------------------------------------------------------------------------->

//! #problem-1 ------------------------------------------------------------------------------------>
//* Write a program where you declare variables using "camelCase". Suppose you declare a string variable named your favorite food. And give it a value.

let myFavoriteFood = "Biryani";
console.log(myFavoriteFood); // output: "Biryani";

//! #problem-2 ------------------------------------------------------------------------------------>
//* Check whether the variable name is case-sensitive or not. Write a program and declare two variables, one named "city", the other named "City". Give the value of the first one "Chittagong" and the value of the second one "Dhaka". Use the console to see the two outputs.

let city = "Chittagong";
console.log(city); // output: "Chittagong";

let City = "Dhaka";
console.log(City); // output: "Dhaka";

//! #problem-3 ------------------------------------------------------------------------------------>
//* You declare a variable called "userName" and give it the value "Johan". Now declare another variable called "username" and give it the value "Jovan". Check the two outputs in the console.

let userName = "Johan";
console.log(userName); // output: "Johan";

let username = "Jovan";
console.log(userName); // output: "Jovan";

//! #problem-4 ------------------------------------------------------------------------------------>
//* I will declare a variable in English called my home address (I didn't say my home address). I will declare the variable using "camelCase". Then I will set its string to a value.

let myHomeAddress = "Dhaka, Bangladesh";
console.log(myHomeAddress); // output: "Dhaka, Bangladesh";

//! #problem-5 ------------------------------------------------------------------------------------>
//* Declare a variable named "super" and set the value to the number of runs scored in the super over. Is the output you see correct or is there a problem?

// SyntaxError: Unexpected token 'super' - because this is the javascript reserved keywords.
// let super = 12;
// console.log(super);

//! #problem-6 ------------------------------------------------------------------------------------>
//* Write a variable called "class" to record the class you are in. Then see what the output shows.

// SyntaxError: Unexpected token 'class' - because this is the javascript reserved keywords.
// const class = 11;
// console.log(class);

//! #problem-7 ------------------------------------------------------------------------------------>
//* To determine who will bat at the second position, create a variable called "2ndPosition" and write the name of a batsman there. See if the output shows it. If it does, comment on the variable and explain what needs to be done.

// SyntaxError: Invalid or unexpected token - because variable names cannot start with a number.
// const 2ndPosition = "Mushfiqur Rahim";
// console.log(2ndPosition);