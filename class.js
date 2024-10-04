// const student = {
//           fullName : "Harshit Dubey",
//           marks : 94.5,
//           printMarks: function() {
//                     console.log("marks = ", this.marks);
//           },
// };

// const employee = {
//           calcTax() {
//                     console.log("Tax rate is 10%");
//           },
// };

// const KaranArjun = {
//           salary: 50000,
// };

// KaranArjun.__proto__ = employee;

// --------------- Class -------------------------------

// class ToyotaCar {
//           constructor(brand, milaege) {
//                     console.log("creating new project");
//                     this.brand = brand;
//                     this.milaege = milaege;
//           }
//   start() {
//     console.log("Start");
//   }

//   stop() {
//     console.log("stop");
//   }
// }
// let fortuner = new ToyotaCar("fortuner", 10);
// console.log(fortuner);
// // fortuner.setBrand("lola");
// let Lexus = new ToyotaCar("lexus", 12);
// console.log(Lexus);

// ------------------ Inheritance ----------------------

// class person {
//           constructor(){
//                     console.log("enter parent constructor");
//                     this.species = "home sapiens";
//           }
//           eat() {
//                     console.log("eat");
//           }

//           sleep() {
//                     console.log("sleep");
//           }
// }

// class Engineer extends person {
//           constructor(branch) {
//                     console.log("enter child consturctor");
//                     super();
//                     this.branch = branch;
//                     console.log("exists child constructor");
//           }
//           work() {
//                     console.log("solve problems, build something");
//           }
// }

// let harshitObj = new Engineer("chemical constructor");

let DATA = "secret information";

class User {
          constructor(name, email){
                    this.name = name,
                    this.email = email;
          }

          viewData() {
                    console.log("data = ", DATA);
          }
}

let student1 = new User("harshit", "email.com");
let student2 = new User("harshit2", "email.com");