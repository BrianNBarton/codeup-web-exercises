// let times = 0;
//
// while (times < 10){
//   times++;
//   console.log("we have done this " + times + "times");
// }
// console.log("we are done");
//
// let x = 1;
// while (x <= 10){
//   console.log(x);
//   x++;
// }
//
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
//
// console.log("we are done!");
// //
// for (let i = 2; i <= 20; i++) {
//   if (i%2 === 0)
//     console.log(i);
// }


/*Create a function named showMultiplicationTable
 that accepts a number and console.logs the multiplication
 table for that number (just multiply by the numbers 1 through 10)
*/

//
// function showMultiplicationTable(num) {
//   let b;
//   for (let i = 1; i <= 10; i++) {
//     b = num * i;
//     console.log(" " + num + " x " + i + " = " + b);
//   }
// }

/*Use a for loop and the code from the previous
lessons to generate 10 random numbers between 20 and 200
and output to the console whether each number is odd or even.



for (let i=0;i<0;i++) {
  let random = Math.floor(Math.random() * 181) + 20)
  if (random % 2 === 0) {
   console.log(random + "is even");
   } else {
   console.log(random + "is odd");
   }
   }


// */
//
//
// const arr = [];
// for (let i = 0; i < 10; i++)
// {
//   arr.push(Math.floor(Math.random() * 200) + 20)
// }
//
// var str = "";
// for (let i = 0; i < 5; i++)
// {
//   str += "," + arr[i];
// }
//
//
//
// let randomOddEven = function(max, min) {
//   for (let i = 1; i < 10; i++) {
//
//     let num = Math.floor(Math.random() * (max - min)) + min;
//     if ((num % 2) === 0) {
//       console.log(num + " is even");
//     } else {
//       console.log(num + " is odd");
//     }
//   }
// }
//
// randomOddEven(200, 20);

// for loop makes a triangle of numbers like so
/*

1
22
333
4444
55555
666666
7777777
88888888
999999999

*/
//
//
// let output = "";
// for (i = 1; i <= 5; i++) {
//   for (let j = 0; j < i; j++) {
//     if (i === 5 && j === i - 1) {
//       output += i
//     } else {
//       output += i + ", "
//     }
//   }
// }
// console.log(output)




//
// for (i = 1; i < 10; i++) {
//   console.log(String(i).repeat(i))
// }

//
// var i = 100;
//
// do {
//   console.log('while loop iteration #' + i);
//   i--;
// } while



//from 100, count backwards by 5. do not include negative numbers.
// //
// var i = 100;
//
// do {
//   console.log(i);
//   i -= 5;
// } while (i > 0);
