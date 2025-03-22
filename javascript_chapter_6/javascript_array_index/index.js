//? javascript array index practice problem ---------------------------------------------------------------------------------------------->

//! #problem-1 ------------------------------------------------------------------------------------------->
//* You have put all your friends' names in an array. Now you find out who is at index number 3.

const arrOfFriends = ['Alex', 'Kim Sa-Hang', 'Jenifer', 'Rahman', 'Esma', 'Rakibul'];
const friendOfIndexThree = arrOfFriends[3];

console.log(friendOfIndexThree); // output: 'Rahman';

//! #problem-2 ------------------------------------------------------------------------------------------->
//* Put the names of your 7 favorite books in an array. Then see what the name of the book in position 5 is.

const arrOfMyFavBooks = ['Binary', 'Python', 'PHP', 'C++', 'C#', 'JavaScript', 'GitHub'];
const booksOfIndexFive = arrOfMyFavBooks[5];

console.log(booksOfIndexFive); // output: 'JavaScript';

//! #problem-3 ------------------------------------------------------------------------------------------->
//* You created an array containing the numbers 1 to 10. Now update the value at position 7 with 30.

const arrOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arrOfNumbers[7] = 30;

console.log(arrOfNumbers); // output: [1, 2, 3, 4, 5, 6, 7, 30, 9, 10];

//! #problem-4 ------------------------------------------------------------------------------------------->
//* You have some games on your mobile and you have put them in an array like 'Free Fire', 'PUBG', 'Candy Crush', 'Temple Run'. Now you want to change the game at index number 2 and put 'Subway Surfer' there. Write a program and do that.

const arrOfGame = ['Free Fire', 'PUBG', 'Candy Crush', 'Temple Run'];
arrOfGame[2] = 'Subway Surfer';

console.log(arrOfGame); // output: [ 'Free Fire', 'PUBG', 'Subway Surfer', 'Temple Run' ];

//! #problem-5 ------------------------------------------------------------------------------------------->
//* Put the names of your family members in an array. Then output the name of the member in the third position.

const arrOfMyFamilyMember = ['Siddikur Rahman', 'Roksana Rahman', 'Rakibul Rahman', 'Esma Rahman'];
const myFamilyThirdMemberIs = arrOfMyFamilyMember[2];

console.log(myFamilyThirdMemberIs); // output: 'Rakibul Rahman';

//! #problem-6 ------------------------------------------------------------------------------------------->
//* You plan to visit 7 countries. Put the names of the countries in an array. Then find the name of the country in position 4.

const arrOfCountryVisit = ['Korea', 'Japan', 'China', 'Malaysia', 'Saudi Arabia', 'Nepal', 'Arab Emirates Dubai'];
const countryOfIndexFour = arrOfCountryVisit[4];

console.log(countryOfIndexFour); // output: 'Saudi Arabia';

//! #problem-7 ------------------------------------------------------------------------------------------->
//* There are 4 things on your desk. Put their names in an array. Then find out what the thing in position 7 is.

const arrOfFourThingsInMyDesk = ['Book', 'Pen Drives', 'Phone', 'Note Books', 'Pen'];
const indexOfSeven = arrOfFourThingsInMyDesk[7];

console.log(indexOfSeven); // output: undefined;