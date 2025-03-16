//? javascript comparison operators practice problems ---------------------------------------------------------------------------------->

//! #problem-1 ---------------------------------------------------------------------------------->
//* Let's compare who ate more food between you and your younger brother. You ate 7 sandwiches, and your younger brother ate 5. Write a program to see who ate more.

let IAteSandwiches = 7;
let youngerBrotherAteSandwiches = 5;

console.log(IAteSandwiches > youngerBrotherAteSandwiches); // output: true; because I ate 7 sandwiches.

//! #problem-2 ---------------------------------------------------------------------------------->
//* There are 45 students in your class, and 50 in the next class. Write a program to see which class has more students.

let myClassStudents = 45;
let nextClassStudents = 50;

console.log(myClassStudents > nextClassStudents); // output: false; because next class students more the my class students.

//! #problem-3 ---------------------------------------------------------------------------------->
//* You and your friend got marks in the exam. You got 75, and your friend got 75. Write a program to check whether your and your friend's marks are the same.

let myMarks = 75;
let friendMarks = 75;

console.log(myMarks == friendMarks); // output: because we both got the same marks.

//! #problem-4 ---------------------------------------------------------------------------------->
//* You have set a target of saving 100 taka. So far you have saved 95 taka. Write a program to check whether you have reached the target or have saved more than you should.

let savingTarget = 100;
let ISaved = 95;

console.log(ISaved >= savingTarget); // output: false; because I haven't reached the target.

//! #problem-5 ---------------------------------------------------------------------------------->
//* Write a program to see if 10 and 7 are different.

let num1 = 10;
let num2 = 7;

console.log(num1 != num2); // output: true; because they're not qual or same.

//! #problem-6 ---------------------------------------------------------------------------------->
//* Check whether 20 is less than or equal to 15.

let number1 = 20;
let number2 = 15;

console.log(number1 <= number2); // output: false; because 20 is not less than or equal to 15

//! #problem-7 ---------------------------------------------------------------------------------->
//* You and your friend took the exam at the same time. After taking the exam, your friend is crying and crying. His exam was horrible, he will fail. A month later, the results showed that you got 45 marks and your friend got 97 marks. Now check to see if your friend got lower marks than you.

let myResult = 45;
let friendResult = 97;

console.log(friendResult > myResult); // output: true; because my friend got higher marks