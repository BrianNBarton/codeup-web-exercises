"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

//
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
//
//
// let analyzeColor = (randomColor);
//
// switch(analyzeColor) {
//   case "red":
//     if ("red") console.log("correct!");
//     break;
//   case "green":
//     if ("blue") console.log("correct!");
//     break;
//   case "yellow":
//     if ("cyan") console.log("do you mean like cayan pepper?");
//     break;
//
//   default:
//       console.log("Oh no! you guessed wrong!");
//     break;
// }
//
// analyzeColor = (prompt("pick a color"))

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//
//
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
//

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
//  */
// let color = prompt("enter your color")
// alert(anlyzeColor(color));
// /* ########################################################################## */
//Walmart Promotion
//
// function calculateTotal(luckyNumber, grandTotal) {
//   var discountRate = 0;
//   switch (luckyNumber){
//     case 0:
//
//       discountRate = 0;
//       break;
//     case 1:
//
//       discountRate = .10;
//       break;
//     case 2:
//
//       discountRate = .25;
//       break;
//     case 3:
//
//       discountRate = .35;
//       break;
//
//     case 4:
//
//       discountRate = .50;
//       break;
//     case 5:
//
//       discountRate = 1;
//       break;
//   }
//   return grandTotal - (discountRate * grandTotal);
// }
//
//
// let luckyNumber = Math.floor(Math.random() * 6);
//
// let totalBill = prompt("your current total");
//
// alert("We're running a promotion today! here's your lucky number " + luckyNumber );
//
// alert("Your previous total is " + totalBill + " and Your new total now comes out to " + calculateTotal(luckyNumber, totalBill).toFixed(2));
//
//
//
//

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

//parseInt()
//
// confirm("would you like to enter a number?");
// number = parseInt(prompt("enter your number here"));
// alert("this is your number plus a hundit " + (number + 100));


let confirm = confirm("enter a number")
if (confirm === true) {
  let confirm = +prompt("enter a number");
  confirm % 2 === 0 ? alert("thats an even number ") : alert("you entered an odd number");
  confirm >= 0 ? alert("thats a positive number") : alert("thats a negative number");
  alert("your number plus 100 " + (confirm + 100)); }
  else {
    alert("you chose not to participate")

}
