// function Person(first, last, age, eye){
//           this.firstname = first;
//           this.lastname = last;
//           this.age = age;
//           this.eyecolor = eye;
// }

// const myName = new Person("Harshit", "Dubey", 19, "Blue");

// // Display age
// document.getElementById("demo").innerHTML = "My Name Is " + myName.firstname + " " + myName.lastname;

// let heroes = ["Batman", "Spiderman", "Shaktiman", "captain america"];

// for(let idx=0; idx<heroes.length; idx++){
//           console.log(heroes[idx]);
// }

// for of 
// for( let el of heroes){
//           console.log(el);
// }

// let items = [250, 645, 300, 900, 50];

// let i = 0;
// for (let val of items){
//           // console.log(`value at index ${i} = ${val}`);
//           let offer = val / 10;
//           items[i] = items[i] - offer;
//           console.log(`value after the offer = ${items[i]}`);
//           i++;
// }

/*Push - add to end
pop - delete from end & return
tostring - converts array to string */

let fooditems = ["potato", "apple", "Litxhi", "tomato"];
console.log(fooditems.toString());
console.log(fooditems);

let marvelHeroes = ["thor", "ironman", "captain"];
let dcHeroes = ["Batman", "superman"];
let indianHeroes = ["Shaktiman", "Giwan"];

let val = marvelHeroes.shift();
let lol = marvelHeroes.unshift(antman);
console.log("deleted", val);
console.log(lol);

let heroes = marvelHeroes.concat(dcHeroes, indianHeroes);
console.log(heroes);

let new = marvelHeroes(slice(0,2));