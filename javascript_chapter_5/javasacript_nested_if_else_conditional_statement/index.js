//? javascript nested if-else-if conditional statement practice problem --------------------------------------------------------------------------------->

//! #problem-1 ---------------------------------------------------------------------------------------------->
//* If a friend invites you, you will go to his birthday party. And if he doesn't invite you, then you will remove him from your friend list. And if a friend invites you, then when you go to the party, you will check how much money you have in your pocket. If you have more than 1000 taka, then you will take a gift for your friend. Otherwise, you will go empty-handed.

let isInvite = true;
let money = 900;

if (isInvite === true) {
    console.log('You will go to his birthday party.');

    if (money > 1000){
        console.log('You will take a gift for your friend.');
    } else {
        console.log('You will go empty-handed.');
    };

} else {
    console.log('You will remove him from your friend list.');
};

//! #problem-2 ---------------------------------------------------------------------------------------------->
//* If a guest comes to your house, first ask them if they want tea. If they want tea, then ask them if they want biscuits with it. If they don't want it, say, 'Only tea is ready.' And if they don't want tea, say, 'Sit down and watch Star Jalsa.'

let isGuestComes = true;
let isWantTea = true;
let isWantBis = true;

if (isGuestComes === true) {

    console.log('Guest is coming.');

    if (isWantTea === true) {
        console.log('They want tea.');

        if (isWantBis === true) {
            console.log('They want biscuits.');
        } else {
            console.log('Only tea is ready.');
        }
        
    } else {
        console.log('Sit down and watch star Jalsa.');
    };
} else {
    console.log('Guest is not coming');
};

//! #problem-3 ---------------------------------------------------------------------------------------------->
//* You've created an app. First, you'll check if the user's account is active. If it is active, you'll check their subscription. If it's premium, you'll show them the premium features. If not, you'll say, 'Check out the free version.'

let isAccountActive = true;
let isPremium = false;

if (isAccountActive === true) {
    
    console.log('Account is active.');

    if (isPremium === true) {
        console.log('Premium subscription features.');
    } else {
        console.log('Check out the free version.');
    }
} else {
    console.log('Account is inactive');
};

//! #problem-4 ---------------------------------------------------------------------------------------------->
//* I'll check if there's food in your fridge. If there is, I'll heat the food. And if not, I'll check if the food delivery app is working. If it's working, I'll order it, if not, I'll say, 'I'm fasting today.'

let isFoodInFridge = false;
let isFoodDeliveryAppWork = true;

if (isFoodInFridge === true) {
    console.log('You will heat the food.');
} else {
    if (isFoodDeliveryAppWork === true) {
        console.log('You will order food.');
    } else {
        console.log('You are fasting today.');
    };
};

//! #problem-5 ---------------------------------------------------------------------------------------------->
//* Suppose you are going to have a party. First, you will see if more than 100 guests will come to the party. If they do, then you will check if everyone will bring gifts. If they do, you will say, 'lets party all night.' Otherwise, you will say, 'I will party with myself.'

let guestCount = 120;
let isGifts = false;

if (guestCount > 100) {

    console.log('Guest is more than 100.');

    if (isGifts === true) {
        console.log('Lets party all night.');
    } else {
        console.log('I will party with myself.');
    };

} else {
    console.log('Guest is less than 100.');
};