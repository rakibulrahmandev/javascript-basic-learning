//? javascript if-else-else-if conditional statement practice problem ----------------------------------------------------------------------------->

//! #problem-1 ----------------------------------------------------------------------------------------------->
//* You are opening your own shop. If someone purchases more than 3000 taka in your shop, you will give a 5% discount, and if someone purchases more than 6000 taka, you will give a 15% discount. If a friend comes and buys something worth 4500 taka, how much will he have to pay?

let purchasesTaka = 7000;

if (purchasesTaka >= 3000 && purchasesTaka <= 6000) {
    let purchasesPrice = (purchasesTaka / 100) * 5;
    let discountAmount = purchasesTaka - purchasesPrice;

    console.log('You have 5% discount, please pay', discountAmount);

} else if (purchasesTaka > 6000) {
    let purchasesPrice = (purchasesTaka / 100) * 15;
    let discountAmount = purchasesTaka - purchasesPrice;

    console.log('You have 15% discount, please pay', discountAmount);

} else {
    console.log('You have no discount, please pay full price.');
};

//! #problem-2 ----------------------------------------------------------------------------------------------->
//* You run a restaurant where children under 12 eat free and people over 60 get a 50% discount, while everyone else has to pay full price.

let age = 60;

if (age < 12) {
    console.log('Children eat free.');
} else if (age > 60) {
    console.log('Old citizen 50% Discount');
} else {
    console.log('Pay full price.');
};

//! #problem-3 ----------------------------------------------------------------------------------------------->
//* If someone's bank account balance is less than 1000 taka, you will say, "Deposit". If it is between 1000 and 5000 taka, you will say, "Enjoy a luxurious life". And if it is more than 5000 taka, you will say, "You are rich, marry me".

let accountBalance = 3000;

if (accountBalance < 1000) {
    console.log('Please Deposit.');
} else if (accountBalance >= 1000 && accountBalance <= 5000) {
    console.log('Enjoy a luxurious life.');
} else {
    console.log('You are rich, marry me.');
};

//! #problem-4 ----------------------------------------------------------------------------------------------->
//* If a student's marks in an exam are less than 50, we say "fail", if between 50 and 80, we say "pass", and if more than 80, we say "A+".

let marks = 60;

if (marks < 50) {
    console.log('Fail.');
} else if (marks <= 80) {
    console.log('Pass.');
} else {
    console.log('A+');
};

//! #problem-5 ----------------------------------------------------------------------------------------------->
//* If a book has fewer than 100 pages, we call it a "small book", if it has between 100 and 500 pages, we call it a "mid-size book", and if it has more than 500 pages, we call it a "heart-attack size book".

let bookPages = 100;

if (bookPages <= 100) {
    console.log('Small Book.');
} else if (bookPages <= 500) {
    console.log('Mid-size book.');
} else {
    console.log('Heart-Attack size book.');
};

//! #problem-6 ----------------------------------------------------------------------------------------------->
//* Write a program that checks if the temperature is less than 0 degrees and says "ice", if it is between 0 and 20 it says "cool cool", and if it is more than 20 it says "hot hot".

let temperature = 15;

if (temperature < 0) {
    console.log('Ice.');
} else if (temperature <= 20) {
    console.log('Cool Cool.');
} else {
    console.log('Hot Hot.');
};

//! #problem-7 ----------------------------------------------------------------------------------------------->
//* You have a gaming app. If the player's level is less than 10, you'll say "novice", if between 10 and 50, you'll say "Expert", and if above 50, you'll say "Pro gamer".

let playerLevel = 20;

if (playerLevel < 10) {
    console.log('Novice.');
} else if (playerLevel <= 50) {
    console.log('Expert.');
} else {
    console.log('Pro Gamer.');
};