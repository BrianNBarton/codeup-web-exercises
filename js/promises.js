

let myPromise = function (user) {
  var url = `https://api.github.com/users/${user}/events/public`
  const myPromise = fetch(url, {headers: {'Authorization': accessToken}});
  // myPromise.then(response => response.json()).then(data => console.log(data[0].created_at));
  // myPromise.catch(error => console.error(error));
  return myPromise;
}

// myPromise.then

let newPromise = myPromise(`briannbarton`)
newPromise.then(response => response.json()).then(data => console.log(data[0].created_at));
