/*Prompt the user for an odd number between 1 and 50.
 Use a loop and a break statement to continue prompting
 the user if they enter invalid input.
  Use a loop and the continue statement
   to output all the odd numbers between 1 and 50,
  except for the number the user entered.

  the number to skip is 27

Here is an odd number: 1
Here is an odd number: 3
Here is an odd number: 5
Here is an odd number: 7
Here is an odd number: 9
Here is an odd number: 11
Here is an odd number: 13
Here is an odd number: 15
Here is an odd number: 17
Here is an odd number: 19
Here is an odd number: 21
Here is an odd number: 23
Here is an odd number: 25
Yikes! Skipping number: 27
Here is an odd number: 29
Here is an odd number: 31
Here is an odd number: 33
Here is an odd number: 35
Here is an odd number: 37
Here is an odd number: 39
Here is an odd number: 41
Here is an odd number: 43
Here is an odd number: 45
Here is an odd number: 47
Here is an odd number: 49
 */
//
//
//
// function countOdds(a) {
//   let b;
//   for (let i = 1; i <= 10; i++) {
//     b = a * i;
//     console.log(" " + a + "*" + i + "=" + b);
//   }
// }
//
// // countOdds(a);
//
//
// function countOdds() {
//   let i;
//   for (i = 0; i <= 51; i++) {
//     if ((i % 1) === 0) {
//       continue; //if num is even, skip it.
//
//     }
//   }
// }
// console.log(countOdds()); //invoke print function
//
//
// let i;
// for (i = 0; i < 50; i++) {
//
//   if (i % 2 === 0) {
//     continue;
//   }
//
//   console.log("here is an odd number " + i + "  ");
// }

//
// let userInput = prompt("Enter an odd number between 1 and 50");
// while (userInput > 50 || userInput < 1 || userInput % 2 == 0) {
//   userInput = prompt("That is not a valid input. Please enter an odd number between 1 and 50.")
//   if (userInput <= 50 && userInput >= 1 && userInput % 2 != 0) {
//     break;
//   }
// }

console.log("Number to skip is: " + userInput);

for (let i = 1; i <= 50; i += 2) {
  if (i % 2 == 0) {
    continue;
  } else if (i == userInput) {
    console.log("Yikes! skipping " + i);
  } else {
    console.log("this is an odd number" + i)
  }
}

else (i === 27) { continue; }

