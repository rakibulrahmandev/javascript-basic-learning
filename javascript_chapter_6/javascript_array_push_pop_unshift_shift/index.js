//? javascript array push, pop, shift, unshift practice problem ------------------------------------------------------------------------>

//! #problem-1 ------------------------------------------------------------------->
//* There is an array of numbers: [10, 20, 30, 40, 50]. Now add 60 to this array and see the output of the array.

// সংখ্যার একটা অ্যারে আছেঃ [১০, ২০, ৩০, ৪০, ৫০]। এখন এই অ্যারেতে ৬০ যোগ করে অ্যারেটি আউটপুটে দেখা।

const arrOfNumber = [10, 20, 30, 40, 50];
arrOfNumber.push(60);

console.log(arrOfNumber); // output: [ 10, 20, 30, 40, 50, 60 ];

//! #problem-2 ------------------------------------------------------------------->
//* You are writing some names in the array: 'Sajib', 'Sagar', 'Sakib', 'Sohel'. Now you feel like you need to add your new friend 'Suman' to this array. Write a program to add Suman at the end.

// তুই কিছু নাম লিখে রাখছিস আরেতেঃ 'সজিব', 'সাগর', 'সাকিব', 'সোহেল'। এখন তোর মনে হলো নতুন বন্ধু 'সুমন' কে এই অ্যারেতে যোগ করেতে হবে। একটা প্রোগ্রাম লিখে দেখ, সমুনকে সবার শেষে যোগ কর।

const arrOfFriends = ['Sajib', 'Sagar', 'Sakib', 'Sohel'];
arrOfFriends.push('Suman');

console.log(arrOfFriends); // output: [ 'Sajib', 'Sagar', 'Sakib', 'Sohel', 'Suman' ];

//! #problem-3 ------------------------------------------------------------------->
//* Put all the games installed on your mobile in an array. Then remove the game name at the end. Then display the remaining games in your array as output.

// তোর মোবাইলে যে যে গেম ইনষ্টল করা আছে, সেগুলো একটা অ্যারেতে রাখ। তারপর সবার শেষে যে গেমের নাম দেয়া আছে, সেটা রিমুভ করে ফেল। এরপর তোর অ্যারেতে কী কী গেম বাকি রইল, সেগুলো আউটপুট হিসেবে দেখা।

const arrOfInstallGames = ['Free Fire', 'Bus Simulator Indonesia', 'Ludo King', 'Call Of Duty', 'GTA 5'];
arrOfInstallGames.pop();

console.log(arrOfInstallGames); // output: [ 'Free Fire', 'Bus Simulator Indonesia', 'Ludo King', 'Call Of Duty' ];

//! #problem-4 ------------------------------------------------------------------->
//* In this array [24, 36, 48, 60]. Add 12 as the very first element and see the entire array as output.

// এই অ্যারেতে [24, 36, 48, 60]। একদম প্রথম উপাদান হিসেবে 12 কে যোগ করে পুরা আরেটা আউটপুট হিসেবে দেখা।

const arrOfNum = [24, 36, 48, 60];
arrOfNum.unshift(12);

console.log(arrOfNum); // output: [ 12, 24, 36, 48, 60 ];

//! #problem-5 ------------------------------------------------------------------->
//* You have an array with 5 book names. Now you have finished reading the first book. So remove the first book name from the array. Then display the remaining names in the output.

// তোর কাছে ৫টি বইয়ের নাম দিয়ে একটা অ্যারে আছে। এখন তুই সবার প্রথম বইটা পড়ে শেষ করে ফেলছস। তাই প্রথম বইয়ের নামটা অ্যারে থেকে রিমুভ করে ফেল। তারপর বাকি নামগুলো আউটপুটে দেখা।

const arrOfBookNames = ['Go', 'Python', 'PHP', 'JavaScript', 'Rudy'];
arrOfBookNames.shift();

console.log(arrOfBookNames); // output: [ 'Python', 'PHP', 'JavaScript', 'Rudy' ];