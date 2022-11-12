// Todays Topics

/* 
1. Promises
*/

// 1. Promises

// Why Promises were introduces?
// Before ES6, people were using callback functions to perform asynchronous tasks in JS. However they were of limited functionality and cause confusing with codes so promises were introduced
// Promises perform async tasks and prevents from callback hell
// We need to initialise promise with new key and they are always returned

function checksEvenOrOddNumber(num) {
  return new Promise((resolve, reject) => {
    if (typeof num !== "number") {
      reject("This is not a number");
    }

    if (num % 2 === 0) {
      resolve("This is an even number");
    }

    resolve("This is odd number");
  });
}

checksEvenOrOddNumber(2)
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

// Assignment : push all even numbers to an array

function pushEvenNumberToArray(num) {
  return new Promise((resolve, reject) => {
    let pushedArr = [];
    for (let i = 0; i <= num; i++) {
      if (i % 2 === 0) {
        // pushedArr.push(i);
        pushedArr = [...pushedArr, i];
      }
    }
    resolve(pushedArr);
  });
}

pushEvenNumberToArray(10).then((value) => console.log(value));
