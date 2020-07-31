const users = [
  {
    id: 1,
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript'],
    yearsOfExperience: 5
  },
  {
    id: 2,
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php'],
    yearsOfExperience: 6
  },
  {
    id: 3,
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash'],
    yearsOfExperience: 7
  },
  {
    id: 4,
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql'],
    yearsOfExperience: 8
  },
  {
    id: 5,
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php'],
    yearsOfExperience: 9
  }
];

//
//   Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let multiUsers = users.filter(users => users.languages.length >= 3);
console.log(multiUsers);

//   Use .map to create an array of strings where each element is a user's email address

let iUsers = users.map(user => user.email);
console.log(iUsers);

// Use .reduce to get the total years of experience from the list of users.
// Once you get the total of years you can use the result to calculate the average.


let totalYears = users.reduce((a, user) => a + user.yearsOfExperience, 0);
console.log(totalYears);

let avgYears = totalYears / users.length;
console.log(avgYears);
//   Use .reduce to get the longest email from the list of users.
let longestEmail = users.reduce((longest, user) => {

  if(user.email.length > longest.length)
    return user.email;
  else;
  return longest;
}, ``);

console.log(longestEmail);
//   Use .reduce to get the list of user's names in a single string. Example:
//   Your instructors are: ryan, luis, zach, fernando, justin.

let userNames = users.reduce((instructors, user, index, arr) => {
  if (index === arr.length - 1) {
    return `${instructors} ${user.name}`;
  } else {
    return `${instructors}`
  }
}, "your instructors are: " );
console.log(userNames);

//Bonus

let languages = Array.from(new Set(users.reduce((a, user) => { a.push(...user.languages); return a; }, [])));
console.log(languages);


