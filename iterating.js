(function(){
  "use strict";

  /**
   * TODO:
   * Create an array of 4 people's names and store it in a variable called
   * 'names'.
   */
     var names = ["Donnie", "Hannah", "Tracy", "Tristan"]
  /**
   * TODO:
   * Create a log statement that will log the number of elements in the names
   * array.
   */
console.log(names.length)
  /**
   * TODO:
   * Create log statements that will print each of the names individually by
   * accessing each element's index.
   */

  names.forEach(function(name, index) {
    console.log('the fruit at index ' + index + ' is ' + name + '.');
  });


  /**
   * TODO:
   * Write some code that uses a for loop to log every item in the names
   * array.
   */
  for (var i = 0; i < names.length; i++) {
    console.log("The fruit at index " + i + " is " + names[i] + ".");
  }
  /**
   * TODO:
   * Refactor your above code to use a `forEach` loop
   */

  names.forEach(function(name, index) {
    console.log("FOR-EACH: The name at index " + index + " is " + name + ".");
  })


  /**
   * TODO:
   * Create the following three functions, each will accept an array and
   * return an an element from it
   * - first: returns the first item in the array
   * - second: returns the second item in the array
   * - last: returns the last item in the array
   *
   * Example:
   *  > first([1, 2, 3, 4, 5]) // returns 1
   *  > second([1, 2, 3, 4, 5]) // returns 2
   *  > last([1, 2, 3, 4, 5]) // return 5
   */
let first = [1, 2, 3, 4]
//
 var notice = 'The first number in the array is: ' + first[0] + "\n";

  let second = [1, 2, 3, 4, 5]
//
 var noticeTwo = 'The the second number in the array is: ' + second[1] + "\n";

  let last = [1, 2, 3, 4, 5,]
//
var noticeThree = 'the last number in this array is: ' + last[4] + "\n";


