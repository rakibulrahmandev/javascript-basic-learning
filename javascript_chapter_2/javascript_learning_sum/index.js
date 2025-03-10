//? javascript sum practice problems ------------------------------------------------------------------------------------------------------------->

//! #problem-1 ---------------------------------------------------------------------------------------------------->
//* Suppose you have earned 100 taka. Out of that, you are spending 40 taka. Write a program to find out how much money is left.

const haveMoney = 100;
const expense = 40;

const total = haveMoney - expense;
console.log(total); // output: 60;

//! #problem-2 ---------------------------------------------------------------------------------------------------->
//* You have 10 pencils. Each time you use 2 pencils at a time. How many times can you use them? Write a program to find out.

const havePencil = 10;
const everyTimeUseTwoPencil = 2;

const howManyTimeUsePencil = havePencil / everyTimeUseTwoPencil; 
console.log(howManyTimeUsePencil); // output: 5;

//! #problem-3 ---------------------------------------------------------------------------------------------------->
//* You have 60 taka. If you spend 15 taka each time, how many times can you spend it? And write a program to find out how much taka will be left after spending.

const hasMoney = 60;
const everyTimeExpense = 15;

const howManyTimeExpense = hasMoney / everyTimeExpense;
console.log(howManyTimeExpense); // output: 4

const howMuchTakaLeft = hasMoney % everyTimeExpense;
console.log(howMuchTakaLeft); // output: 0

//! #problem-4 ---------------------------------------------------------------------------------------------------->
//* Suppose you have two strings, "hello" and "world". Write a program to show how to concatenate these two strings to form "HelloWorld".

const fastString = "Hello";
const lastString = "World";

console.log(fastString + lastString); // output: HelloWorld;

//! #problem-5 ---------------------------------------------------------------------------------------------------->
//* If you bought 153 kg of rice and 261 kg of pulses, how many kg of each item did you buy? Write a program to find the total kg.

const buyRice = 153;
const buyLenten = 261;

const totalBuy = buyRice + buyLenten;
console.log(totalBuy); // output: 414;

//! #problem-6 ---------------------------------------------------------------------------------------------------->
//* You have 500 taka, you will spend 75 taka each time. Write a program to find out how many times you can spend it and how much taka will be left at the end.

const iHaveMoney = 500;
const everyTimeIExpense = 75;

const howManyTimeIExpenseMoney = iHaveMoney / everyTimeIExpense;
console.log(howManyTimeIExpenseMoney); // output: 6.666666666666667;

const howMuchTakaLeftEnd = iHaveMoney % everyTimeIExpense;
console.log(howMuchTakaLeftEnd); // output: 50;

//! #problem-7 ---------------------------------------------------------------------------------------------------->
//* Write a program to find the remainder when you divide 8 by 3.

const divideEight = 8;
const dividerByThree = 3;

const resultOfDivideEight = divideEight / dividerByThree;
console.log(resultOfDivideEight); // output: 2.6666666666666665;

const divideRemainder = divideEight % dividerByThree;
console.log(divideRemainder); // output: 2;

//! #problem-8 ---------------------------------------------------------------------------------------------------->
//* Write a program to find the remainder when you divide 50 by 9.

const divideNumber = 50;
const divideNumberBy = 9;

const remainderNumber = divideNumber % divideNumberBy;
console.log(remainderNumber); // output: 5;

//! #problem-9 ---------------------------------------------------------------------------------------------------->
//* You want to make "Bangladesh" by adding the strings "Bangla" and "Desh". Write a program to show how to do this.

const fString = "Bangla";
const lString = "desh";

console.log(fString + lString); // output: "Bangladesh";

//! #problem-10 --------------------------------------------------------------------------------------------------->
//* Suppose, one day you wake up and become a little demon due to hunger. From then on, you eat 4 kg of rice every day. Now if you are given 12 maunds (480 kg) of rice, then how many days will you last with this rice. Again, if a month is 30 days, then how many months will you last with this 12 maunds of rice?

const iHaveRice = 480; // 12 maunds;
const everyDayWeEatRice = 4; // 4 kg;

const howManyDayWeEatRice = iHaveRice / everyDayWeEatRice;
console.log(howManyDayWeEatRice); // output: 120 days;

const dayOfMonth = 30; // 1 month = 30 days;
const howManyMonthWeEatRice = howManyDayWeEatRice / dayOfMonth;
console.log(howManyMonthWeEatRice); // output: 4 month; 