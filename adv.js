  // Event Loop ---------------------------------------

// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout');
// }, 2000);

// console.log('End');

// Microtask Queue (Promises and async/await) ---------

// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Promise');
// });

// console.log('End');

/* 
Call Stack: Handles synchronous code.
Web APIs: Manages asynchronous operations.
Task Queue: Holds async callbacks to be executed after the call stack is empty.
Microtask Queue: Holds promise callbacks and is executed before the task queue.
Event Loop: Continuously checks if the call stack is clear and pushes tasks from the queues to the stack.
 */

// const fruits = ['Apple', 'Banana', 'Orange'];

// // Before ES6
// const firstFruit = fruits[0];
// const secondFruit = fruits[1];
// const thirdFruit = fruits[2];

// // With ES6 Destructuring
// const [first, second, third] = fruits;

// console.log(first);  // Apple
// console.log(second); // Banana
// console.log(third);

// -  ---- -     ------ ------ ------- Object Destructuring

// const person = {
//   name: 'John',
//   age: 30,
//   city: 'New York'
// };

// // Before ES6
// // const name = person.name;
// // const age = person.age;

// // With ES6 Destructuring
// const { name: personName, age, city } = person;

// console.log(personName);  // John
// console.log(city);    
// console.log(age);    // New York

// ---------------- Spread Operator -------------------

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// // Merge arrays
// const merged = [...arr1, ...arr2];
// console.log(merged);  // [1, 2, 3, 4, 5, 6]

// // Copy an array
// const copy = [...arr1];
// console.log(copy);  // [1, 2, 3]


// in objects ------------------------------------------

// const person1 = { name: 'John', age: 25 };
// const person2 = { city: 'New York', country: 'USA' };

// // Merge objects
// const mergedPerson = { ...person1, ...person2 };
// console.log(mergedPerson);  
// // { name: 'John', age: 25, city: 'New York', country: 'USA' }

// // Copy object
// const personCopy = { ...person1 };
// console.log(personCopy);  // { name: 'John', age: 25 }


const name = 'Harshit';

const greeting = `Hello, ${name}!`;
console.log(greeting);

const multiline = ` Multiline
 this is line 1 
 this is line 2
 this is line 3`;

 console.log(multiline);

 const X = 10;
 const Y = 20;

 const sum = `Sum of ${X} and ${Y} is ${X + Y}`;
 console.log(sum);
