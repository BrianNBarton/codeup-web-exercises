(function () {
  "use strict";


  // function fizzBuzz(num) {
  //   for (let i = 1; i <= num; i++) {
  //     if (i % 15 == 0)
  //       console.log("FizzBuzz");
  //     else if (i % 3 == 0)
  //       console.log("Fizz");
  //     else if (i % 5 == 0)
  //       console.log("Buzz");
  //     else
  //       console.log(i);
  //   }
  // }
  //
  // fizzBuzz(30);
  //
  //
  // const myMac = {};
  // myMac.users = [
  //   {
  //     username: "sophie",
  //     id: 1
  //   },
  //   {
  //     username: "vivian",
  //     id: 2
  //   },
  //   {
  //     username: "david",
  //     id: 3
  //   }];
  //


const findUsers = function (usersArray) {
  let usernames = [];
  for (let i=0;i<usersArray.length;i++) {
    usernames.push(usersArray[i].username);
  }
  return usernames;
}


console.log(findUsers(myMac.users));


  const addRole = function(role) {
    // for (var i=0;i<myMac.users.length;i++) {
    //     myMac.users[i].role = role;
    // }
    myMac.users.forEach(function(item){
      item.role = role;


    })
  }

  console.log(myMac.users);
  addRole("instructor");
  console.log(myMac.users);

//
// Write a function that takes in a three digit integer and returns the digit in the tens. I.e. isolateTensDigit(345) → 4
