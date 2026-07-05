{let age =prompt("how old are you??");
age = Number(age) ;
let message;
if ( age >= 21) {
    message = "Confirm entry to a venue and the ability to purchase alohol";
} else if (age >= 19 ) {
    message = 'confirm entry to the venue but deny the purchase of alcohol';
} else {
    message = "deny entry";
}
console.log(message);
}

let age = prompt( "enter your age");
age = Number(age) ;
let cost = 0;
let message;
if (age < 3) {
 cost = 0;
 message = "Access is free under three.";
} else if (age >= 3 && age < 12) {
 cost = 5;
 message ="With the child discount, the fee is 5 dollars";
} else if (age >= 12 && age < 65) {
 cost = 10;
 message ="A regular ticket costs 10 dollars.";
} else {
 cost = 7;
 message ="A ticket is 7 dollars.";
}
console.log(message);
console.log("Your Total cost is "+cost);