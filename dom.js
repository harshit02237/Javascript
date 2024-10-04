// console.log("Hello");
// // alert("Ham sab ka maksad ek hai");
// document.body.style.background = "black";

// document.getElementById("H");
// console.log(H);

// let headings = document.getElementByClassName("heading-class");
// console.dir(headings);
// console.log(headings);

// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);
// console.log(parahs);

// Query Selector 

// let firstel = document.querySelector("p");
// console.dir(firstel);
// let all = document.querySelectorAll("p");
// console.log(all);

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innertext + " from apna college students "; // concatinate

// let divs = document.querySelectorAll(".box");
// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new Unique value 2";
// divs[2].innerText = "new Unique value 3";

// let div = document.querySelector("div");
    
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));
// console.log(para.setAttribute("class", "newClass"));

// div.style.backgroundColor = "green";
// div.style.visibility = "";
// div.style.fontSize = "26px";
// div.innerText = "Hello";

// Create Button 

let newBtn = document.createElement("button");
newBtn.innerText = "click me";
console.log(newBtn);

let div = document.querySelector("div");
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
div.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>H1, i am Harshit!<i/>";

document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p");
para.remove();
