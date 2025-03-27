//? javascript array indexOf and includes practice problem ---------------------------------------------------------------------------------------------->

//! #problem-1 ---------------------------------------------------------------------------------->
//* You want to write a program that checks whether a fruit called 'mango' is in the list or not. If it is, the output will say, 'Mango is there', and if not, it will say, 'No mango, climb the tree'. The array of fruits contains 'apple', 'banana', 'mango' and 'lychee'.

const arrOfFruit = ['Apple', 'Banana', 'Mango', 'Lichi'];

// --------------------------------------------------------------- methods-1. using ternary operators;
const checkMangoIsExist = arrOfFruit.includes('Mango') ? 'Mango is there.' : 'No mango, climb the tree.';
console.log(checkMangoIsExist); // output: 'Mango is there';

// --------------------------------------------------------------- methods-2. using if-else statement;
if (arrOfFruit.includes('Mango')) {
    console.log('Mango is there.');
} else {
    console.log('No mango. climb the tree.1');
};

//! #problem-2 ---------------------------------------------------------------------------------->
//* You have created an array, which contains the names -- 'Babul', 'Alif', 'Chhotan'. Now write a program to see what is the index number of Babul.

const arrOfNames = ['Babul', 'Alif', 'Chhotan'];
console.log(arrOfNames.indexOf('Babul')); // output: 0;

//! #problem-3 ---------------------------------------------------------------------------------->
//* Suppose you have created a list of friends' names in an array --- 'Rimon', 'Rifat', 'Rajib'. Now you think you have forgotten the location of 'Rifat'. Write a program to find the index of Rifat.

const arrOfFriendsNames = ['Rimon', 'Rifat', 'Rajib'];
console.log(arrOfFriendsNames.indexOf('Rifat')); // output: 1;

//! #problem-4 ---------------------------------------------------------------------------------->
//* You are writing down the names of some cities -- 'Dhaka', 'Chittagong', 'Sylhet'. Now you think you will add another city name, but you forget to add the lowercase 'rajshahi'. Now write a program to check if 'RajShahi' exists or not.

const arrOfCity = ['Dhaka', 'Chittagong', 'Sylhet', 'rajshahi'];
console.log(arrOfCity.includes('RajShahi')); // output: false;

//! #problem-5 ---------------------------------------------------------------------------------->
//* Write a program to check if there is an element called 'rain'. If there is, then the output will say 'I need umbrella', if not, it will say 'No rain no pain'. The array contains 'Dighi', 'Megh', 'Rain' and 'Rain'.

const arrOfWeather = ['Megh', 'Rain', 'Dighi'];

// --------------------------------------------------------------- methods-1. using ternary operators;
const checkRainIsExist = arrOfWeather.includes('Rain') ? 'I need umbrella.' : 'No rain no pain.';
console.log(checkRainIsExist); // output: 'I need umbrella';

// --------------------------------------------------------------- methods-2. using if-else statement;
if (arrOfWeather.includes('Rain')) {
    console.log('I need umbrella.');
} else {
    console.log('No rain no pain.');
};

//! #problem-6 ---------------------------------------------------------------------------------->
//* You have an array of your favorite sports --- 'Football', 'Cricket', 'Volleyball'. Now you want to check if the game called 'Badminton' is in the array or not.

const arrOfFavSports = ['Football', 'Cricket', 'Volleyball'];
console.log(arrOfFavSports.includes('Badminton')); // false;