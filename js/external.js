//
//
// alert("Welcome to my website!");
//
// //#1
//
// let color = prompt("whats your favorite color?");
//
// //#2
//
// alert("great! " + color + " is my favorite color too!");
//
// //#3
//
// // You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
// let littleM = parseInt(prompt("How many days did you rent The Little Mermaid"));
//
// let brotherB = parseInt(prompt("How many days did you rent Brother Bear?"));
//
// let hercules = parseInt(prompt("how many days did you rent hercules?"));
//
// let total = (littleM + brotherB + hercules)*3;
//
// alert("your total is $" + total + " for these movies");
//
//


// console.log("Your total cost is: $" + totalCost);
// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
const googlePay = 400;

const amazonPay = 380;

const facebookPay = 350;

var googleHours = prompt("how many hours did you work at google?");;

var amazonHours = prompt("how many hours did you work at amazon?");;

var facebookHours = prompt("how many hours did you work at facebook?");

var totalGooglePay = googlePay * googleHours;

var totalAmazonPay = amazonPay * amazonHours;

var totalFacebookPay = facebookPay * facebookHours;

var totalPay = totalGooglePay + totalAmazonPay + totalFacebookPay;


// console.log(totalGooglePay);
// console.log(totalAmazonPay);
// console.log(totalFacebookPay);
// console.log("Your total pay is: $" + (totalGooglePay + totalAmazonPay + totalFacebookPay));
// console.log(`Your total pay is: ${totalPay}`);



// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
let isClassOpen = confirm("is there room in the class?")
let isScheduleOpen = confirm("does the class fit your schedule?");

alert("you may register: " + (isClassOpen && isScheduleOpen) );

// var enrolled;
// var notFull = true;
// var notConflict = false;
// console.log(enrolled);
// enrolled = notFull && notConflict;
// console.log(enrolled);
// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
let moreThan2 = parseInt.prompt("How many Items did you purchse?")
let notExpired = parseInt.confirm("press ok if not expired")
let premiumMem =  parseInt.confirm("press ok if you are a premium member")


var isOfferApplied = (moreThan2 && notExpired) || (premiumMem && notExpired);
 alert("Offer applied: " (moreThan2 && notExpired) || (premiumMem && expired) )

// var offerApplied = (moreThan2 || premiumMem) && notExpired;
// console.log(offerApplied);
var username = 'codeup';
var password = 'notastrongpassword';
var passAtLeastFive = password.length >= 5;
var passNotIncludeUN = password.indexOf(username) === -1;
var usernameAtLeastTwenty = username.length <= 20;
var noLeadingTrailingWS = (username === username.trim()) && (password === password.trim());
console.log(passAtLeastFive);
console.log(passNotIncludeUN);
console.log(usernameAtLeastTwenty);
console.log(noLeadingTrailingWS);
