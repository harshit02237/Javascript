// let x = 10;
// let y = prompt("Enter the value of Y : ");
//  while(y != x ){
//                    y = prompt("Y is not equal to than x");
//           }
//           console.prompt("YOu guessed the correct number");

const person = {
          firstname: "Harshit",
          lastname: "dubey",
          age: 19,
          eyecolor: "blue"
};
// person.nationality = "English";
// document.getElementById("demo").innerHTML = 
// person.firstname + " is " + person.age + " Years old " + " is " + " nationality " + person.nationality;

// Add a Method
person.name = function(){
          return this.firstname + " " + this.lastname.toUpperCase();
};

document.getElementById("demo").innerHTML = "My name is " + person.name();