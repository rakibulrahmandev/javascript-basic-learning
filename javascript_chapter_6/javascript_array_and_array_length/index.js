//? javascript array and array length practice problem ------------------------------------------------------------------------------------------->

//! #problem-1 ------------------------------------------------------------------------------->
//* You create an array where you put the numbers from 71 to 79.

// তুই একটা অ্যারে বানালি, যেখানে ৭১ থেকে ৭৯ পর্যন্ত সংখ্যাগুলো রাখ।

const arrOfNumber = [71, 72, 73, 74, 75, 76, 77, 78, 79];

//! #problem-2 ------------------------------------------------------------------------------->
//* You have a small refrigerator at home that can hold exactly 5 fruits. You make an array and put apples, bananas, oranges, mangoes, and guavas in it.

// তোর বাসায় একটা ছোট ফ্রিজ আছে, যেখানে ঠিক ৫ টা ফল রাখাতে পারিস। তুই একটা অ্যারে বানিয়ে তাতে আপেল, কলা, কমলা, আম আর পেয়ারা রাখলি।

const arrOfFruits = ['Apple', 'Bananas', 'Oranges', 'Mangoes', 'Guavas'];

//! #problem-3 ------------------------------------------------------------------------------->
//* Suppose you went to the market one day. You put 10 vegetables in your bag: potato, onion, brinjal, radish, carrot, tomato, eggplant, gourd, cucumber and potato. Write a program to find out how many vegetables are in the bag.

//ধর, তুই একদিন বাজারে গিয়েছিলি। তোর ব্যাগে আলু, পেঁয়াজ বেগুন, মুলা, গাজর, টমেটো, ঢ্যাঁড়স, লাউ, শসা আর পটল ১০ টা সবজি রাখলি। একটা প্রোগ্রাম লিখে বের কর, ব্যাগে মোট কয়টা সবজি আছে।

const arrOfVegetable = ['Potato', 'Onion', 'Brinjal', 'Radish', 'Carrot', 'Tomato', 'Eggplant', 'Gourd', 'Cucumber', 'Potato'];
const totalVegetableInArr = arrOfVegetable.length;

console.log(totalVegetableInArr); // output: 10;

//! #problem-4 ------------------------------------------------------------------------------->
//* Put the names of your 5 favorite movies in an array.

// তোর ৫ টা প্রিয় সিনেমার নাম একটা অ্যারেতে রাখ।

const arrOfMovie = ['Mad Max', 'Titanic', 'Anaconda', 'The Karate Kid', 'Chocolate Factory'];

//! #problem-5 ------------------------------------------------------------------------------->
//* Write an array that contains the odd numbers between 11 and 30.

//একটা অ্যারে লিখ, যেটার মধ্যে ১১ থেকে ৩০ এর মধ্যে বিজোড় সংখ্যাগুলো থাকবে।

const arrOfOdd = [11, 13, 15, 17, 19, 21, 23, 25, 27, 29];

//! #problem-6 ------------------------------------------------------------------------------->
//* Create an array of the colors you can see around you. Then log the length of that array to the console.

// তোর চারপাশে তাকিয়ে যে যে কালার দেখতে পারতেছস, সেগুলোর একটা অ্যারে বানা। তারপর সেই অ্যারের লেন্থ কনসোলে লগ কর।

const arrOfColor = ['Red', 'Blue', 'Orange', 'Black', 'White'];
const totalColorInArr = arrOfColor.length;

console.log(totalColorInArr); // output: 5;

//! #problem-7 ------------------------------------------------------------------------------->
//* Take the names of the capitals of a few countries, put them in an array, and log their length to the console.

// কয়েকটা দেশের রাজধানীর নাম নিয়ে একটা আরেতে রাখ এবং তার লেন্থ কনসোলে লগ কর।

const arrOfCountryCity = ['Seoul', 'Dhaka', 'Paris', 'Tokyo', 'Beijing'];
const totalCountryCityInArr = arrOfCountryCity.length;

console.log(totalCountryCityInArr); // output: 5;