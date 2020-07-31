

let myPromise = function (user) {
  var url = `https://api.github.com/users/${user}/events/public`
  const myPromise = fetch(url, {headers: {'Authorization': accessToken}});
  // myPromise.then(response => response.json()).then(data => console.log(data[0].created_at));
  // myPromise.catch(error => console.error(error));
  myPromise.catch(error => console.error(error));
  return myPromise;
}

// myPromise.then

let newPromise = myPromise(`briannbarton`)
newPromise.then(response => response.json()).then(data => console.log(new Date(data[0].created_at)));

//Write a function named wait that accepts a number as a parameter,
// and returns a promise that resolves after the passed number of milliseconds.

//
// const myPromise = new Promise((resolve, reject) => {
//   if (Math.random() > 0.5) {
//     resolve();
//   } else {
//     reject();
//   }
// });


let wait = function(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (x) {
        resolve('whatever');
      } else {
        reject('ok bud')
      }
    }, x);
  });
}

  wait(1000).then(() => alert('You\'ll see this after 1 second'));

  wait(3000).then(() => alert('You\'ll see this after 3 seconds'));
