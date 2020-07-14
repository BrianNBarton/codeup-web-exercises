(function () {
  "use strict";


  function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
      if (i % 15 == 0)
        console.log("FizzBuzz");
      else if (i % 3 == 0)
        console.log("Fizz");
      else if (i % 5 == 0)
        console.log("Buzz");
      else
        console.log(i);
    }
  }

  fizzBuzz(30);


})();

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 15 == 0)
      console.log("FizzBuzz");
    else if (i % 3 == 0)
      console.log('Fizz');
    else if (i % 5 == 0)
      console.log("Buzz");
    else
      console.log(i);

  }
}

function fizzbuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 15 == 0)
      console.log("fizzbuzz");
    else if (i % 3 == 0)
      console.log("fizz")
    else if (i % 5 == 0)
      console.log("buzz");
    else
      console.log(i);
  }
}

var fibonacci = function (n) {
  if (n === 1) {
    return [0, 1];
  } else {
    var s = fibonacci(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};
//
// Write a function that takes in a three digit integer and returns the digit in the tens. I.e. isolateTensDigit(345) → 4

function isolateTensDigit(int){
  int %= 100;
  int /= 10;
  int = Math.floor(int);
  return int
}
console.log(isolateTensDigit(345));
