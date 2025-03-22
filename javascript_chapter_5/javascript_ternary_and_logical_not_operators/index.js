//? javascript ternary and logical operators practice problem ------------------------------------------------------------------------------->

//! #problem-1 ------------------------------------------------------------------------------------------------>
//* You are opening your own shop. If someone purchases more than 3000 taka in your shop, you get 500 taka cashback. And if someone purchases less than that, you get 0 taka cashback. Now write this on one line. The variable will be named 'cashback', and you will set the value using the ternary operator.

/* তুই নিজের দোকান খুলছিস। তোর দোকানে কেউ ৩০০০ টাকার বেশি কেনাকাটা করলে ক্যাশব্যাক ৫০০ টাকা। আর তার কম কেনাটাকা করলে ক্যাশব্যাক ০ টাকা। এখন এই জিনিসটা এক লাইনে লিখ। ভেরিয়েবলের নাম হবে 'cashback', আর মান সেট করবি টার্নারি অপারেটর ইউজ করে। */

let purchasesPrice = 4000;
let cashback = purchasesPrice > 3000 ? 500 : 0;

console.log(cashback);

//! #problem-2 ------------------------------------------------------------------------------------------------>
//* If you are over 15, it will show 'Teenager'. If you are under 15, it will show 'child'. Write this on one line using the ternary operator.

/* তোর বয়স যদি ১৫ এর বেশি হয়, তাহলে 'Teenager' দেখাবে। আর যদি কম হয়, তাহলে 'child' দেখাবে। এটা টার্নারি অপারেটর দিয়ে এক লাইনে লিখ। */

let age = 17;
let teenagerOrChild = age > 15 ? 'Teenager' : 'Child';

console.log(teenagerOrChild);

//! #problem-3 ------------------------------------------------------------------------------------------------>
//* If the value of 'isLoggedIn' is true, then we will set 'welcome back' as the message. And if it is false, then we will set 'Please Login' as the message. Write this on one line using the ternary operator.

/* যদি 'isLoggedIn' এর মান true হয়, তাহলে 'welcome back' কে message হিসেবে সেট করবি। আর যদি false হয়, তাহলে 'Please Login' কে message হিসেবে সেট করবি। এই জিনিসটা টার্নারি অপারেটর দিয়ে এক লাইনে লিখ। */

let isLoggedIn = true;
let loginMsg = isLoggedIn ? 'Welcome back' : 'Please Login';

console.log(loginMsg);

//! #problem-4 ------------------------------------------------------------------------------------------------>
//* If your car's fuel tank is full, it will show 'Ready for a long drive'. If not, it will show 'Fill the tank'.

/* তোর গাড়ির তেলের ট্যাংক যদি full হয়, তাহলে 'Ready for a long drive' দেখাবি। আর না হলে 'Fill the tank' দেখাবি। */

let isTankFull = true;
let readyForDrive = isTankFull ? 'Ready for a long drive' : 'Fill the tank';

console.log(readyForDrive);

//! #problem-5 ------------------------------------------------------------------------------------------------>
//* If you pass the exam, then show 'Party Time'. And if you fail, then show 'Next Semester e serious study korbo'. Do it with ternary operator in one line.

/* তুই যদি পরীক্ষায় পাস করিস, তাহলে 'Party Time' দেখাবি। আর যদি ফেল করিস, তাহলে 'Next Semester e serious study korbo' দেখাবি। এক লাইনে টার্নারি অপারেটর দিয়ে কর। */

let isExamPass = true;
let decision = isExamPass ? 'Party time' : 'Next Semester e serious study korbo';

console.log(decision);

//! #problem-6 ------------------------------------------------------------------------------------------------>
//* If the value of the sunny variable is false, then 'Stay home' will be logged to the console.

/* যদি sunny ভেরিয়েবলের মান false হয়, তাহলে 'Stay home' কে কনসোল লগ করবি। */

//? method-1 -------------------------->
let isSunny = false;
let homeOrOutside = isSunny ? 'Go outside' : 'Stay Home';

console.log(homeOrOutside); // output: 'Stay Home';

//? method-2 -------------------------->
let sunny = false;
!sunny && console.log('Stay Home'); // output: 'Stay Home';

//! #problem-7 ------------------------------------------------------------------------------------------------>
//* If the value of the expensive variable is false, then the console will log "I will buy this item".

/* যদি expensive ভেরিয়েবলের মান false হয়, তাহলে কনসোল লগ করবি "I will buy this item"। */

//? method-1 -------------------------->
let isExpensive = false;
let BuyOrNot = isExpensive ? 'I will not buy this item' : 'I will buy this item';

console.log(BuyOrNot); // output: 'I will buy this item';

//? method-2 -------------------------->
let expensive = false;
!expensive && console.log('I will buy this item'); // output: 'I will buy this item';