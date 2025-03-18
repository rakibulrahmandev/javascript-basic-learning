//? javascript if else conditional statement with logical operators practice problem ---------------------------------------------------------------------->

//! #problem-1 -------------------------------------------------------------------------------------------------->
//* Write a program that checks if the person is over 18 years old and over 60 inches tall. Then he will push the car, or he will sit in the car.

const personAge = 20;
const personHeight = 65;

if (personAge >= 18 && personHeight >= 60) {
    console.log('He will push the car.');
} else {
    console.log('He will sit in the car.');
};

//! #problem-2 -------------------------------------------------------------------------------------------------->
//* Write a program that checks whether a student is eligible for admission. The math score must be more than 80 or the English score must be more than 85. And if neither of these is true, I will tell you that I will marry you.

const mathScore = 85;
const englishScore = 90;

if (mathScore > 80 || englishScore > 85) {
    console.log('Eligible for admission.');
} else {
    console.log('Not eligible for admission.');
};

//! #problem-3 -------------------------------------------------------------------------------------------------->
//* If a student's GPA is 5 and the family's monthly income is less than 10,000, then he will get a scholarship. Otherwise, you will have to pay for your studies.

const gpa = 5;
const familyMonthlyIncome = 9000;

if (gpa === 5 && familyMonthlyIncome < 10000) {
    console.log('He will get a scholarship.');
} else {
    console.log('You will have to pay for your studies.');
};

//! #problem-4 -------------------------------------------------------------------------------------------------->
//* A job seeker can take the exam if he is less than 30 years old and has more than 2 years of work experience. Otherwise, he will not be able to take the job exam. Write a program to do so.

const jobSeekerAge = 20;
const jobSeekerExperience = 3;

if (jobSeekerAge < 30 && jobSeekerExperience > 2) {
    console.log('He will be able to take the job exam.');
} else {
    console.log('He will not be able to take the job exam.');
};

//! #problem-5 -------------------------------------------------------------------------------------------------->
//* If you have more than 12 eggs in your fridge or if you don't have any chicken, then you will cook egg korma. Otherwise, you will eat bread and banana. Write a code like this.

const eggInFridge = 12;
const isChickenBeefInFridge = false;

if (eggInFridge > 12 || isChickenBeefInFridge == true) {
    console.log('You will cook egg korma.');
} else {
    console.log('You will eat bread and banana.');
};

//! #problem-6 -------------------------------------------------------------------------------------------------->
//* If a person has a body temperature of over 100 degrees or has a cough, he will go to the doctor. Otherwise, he will lie down with a fever. Write a program for this.

const bodyTemperature = 102;
const hasCough = true;

if (bodyTemperature > 100 || hasCough == true) {
    console.log('He will go to the doctor.');
} else {
    console.log('He will lie down with a fever.');
};

//! #problem-7 -------------------------------------------------------------------------------------------------->
//* A student will be allowed to take the exam if his attendance is more than 80 percent and homework is submitted. Otherwise, auto fail. Write a program for this condition.

const attendancePercent = 85;
const isHomeworkSubmitted = true;

if (attendancePercent > 80 && isHomeworkSubmitted == true) {
    console.log('Allowed to take the exam');
} else {
    console.log('Auto fail.');
};

//! #problem-8 -------------------------------------------------------------------------------------------------->
//* If the power goes out at your house and your phone doesn't charge, you'll sit down to read. Or play a video game. Write a code for that.

const isPowerOut = true;
const isPhoneCharge = true;

if (isPowerOut == true && isPhoneCharge == true) {
    console.log('You will sit down to read.');
} else {
    console.log('Play a video game.');
};

//! #problem-9 -------------------------------------------------------------------------------------------------->
//* If the price of the shirt is more than 1000 taka and you have a coupon, you will be given a 20 percent discount. Write a program for this.

const shirtPrice = 1200;
const isCoupon = true;

if (shirtPrice > 1000 && isCoupon == true) {
    let price = shirtPrice;
    let discount = (price / 100) * 20;
    let discountPrice = shirtPrice - discount;

    console.log('You will have discount:', discountPrice);
} else {
    console.log('You will not have a discount. Please pay', shirtPrice);
};