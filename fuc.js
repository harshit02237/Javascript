// function myfunction (msg){
//           console.log(msg);
// }

// myfunction("i love u");

// function sum(x, y){
//           s = x + y ;
//           console.log("before return");
//           return s;
//           console.log("after return");
// }

// let val = sum(3, 4);
// console.log(val);

// Arrow Function  - compact way of writing a fucntion

// const arrowSum = (a, b) => {
//           console.log(a+b);
// };

// const arrowMul = (a,b) => {
//           return a * b;
// }

// function countVowels(str){
//           let count = 0;
//           for ( const char of str ){
//                     if (
//                               char === "a" ||
//                               char === "e" ||
//                               char === "i" ||
//                               char === "o" ||
//                               char === "u"
//                     ) {
//                               count ++;
//                     }

//           }
//           return count;
// }

// For each 
// let arr = [1,2,3,4,5,6,7];

// arr.forEach((val) => {
//           console.log(val);
// });


// let arr = ["harshit", "Aakansha"];

// arr.forEach((val) => {
//           console.log(val.toUpperCase());
// });

// Calculate the square for each numebr in array 

// let sqr = [1,2,3];
// let s = (val) => {
//     console.log(val*val);
// };

// sqr.forEach(s);

/* Map Array Method - Creates a new array with the results of some operation. The value its callback returns are used to form new array. 
 */

// let nums = [23, 34 ,45];
// let newArr = nums.map((val) => {
//           return val;
// });
// console.log(newArr);

// let calcSqare = (val) => {
//           console.log(val*val);
// };

let value = 1;

doSomething(() => {
  value = 2;
});

console.log(value);