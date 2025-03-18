//? javascript if-else conditional statement practice problems ------------------------------------------------------------------------>

//! #problem-1 --------------------------------------------------------------------------------------->
//* Your mom says, if you come home before 6 o'clock, she'll feed you breakfast. And if you're late, she'll give you a broomstick. Code for this condition.

let clockTime = 4;

if (clockTime < 6) {
    console.log('Mom will feed me breakfast.');
} else {
    console.log('Mom will give me broomstick');
};

//! #problem-2 --------------------------------------------------------------------------------------->
//* A mobile app will display "welcome!" if the login is successful. If it fails, it will display "get lost!". Write a program for this condition.

let appLogin = true;

if (appLogin === true) {
    console.log('Welcome!');
} else {
    console.log('Get Lost!');
};

//! #problem-3 --------------------------------------------------------------------------------------->
//* If you run 5 km, you will be given chocolate. If you don't run, you will have a fat belly. Write a program for this condition.

let distanceRunning = 6;

if (distanceRunning >= 5) {
    console.log('You will be given chocolate.');
} else {
    console.log('You will have a fat belly.');
};

//! #problem-4 --------------------------------------------------------------------------------------->
//* Suppose your father says that if you pass the exam with more than 40 marks, he will buy you a bike. But if you pass with less than 40 marks, he will not give you a bike. Write a program to see if you will get a bike or not if your marks are 85.

let myMarks = 85;

if (myMarks >= 40) {
    console.log('Dad will give me a bike.');
} else {
    console.log('Dad will not give me a bike.');
};

//! #problem-5 --------------------------------------------------------------------------------------->
//* If the movie show is before 9 pm, then you will watch the movie. If it is later, then go home and sleep with oil in your nose. Write a program for this.

let movieShowStartAt = 5;

if (movieShowStartAt <= 9) {
    console.log('You will watch the movie.');
} else {
    console.log('You will go home and sleep.');
};

//! #problem-6 --------------------------------------------------------------------------------------->
//* If the temperature is 30 degrees or higher, turn on the air conditioner. If it is lower, sleep with a blanket wrapped around you. Write the code for this.

let temperature = 30;

if (temperature >= 30) {
    console.log('Turn on the air conditioner.');
} else {
    console.log('Sleep with a blanket.');
};