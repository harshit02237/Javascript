let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//           console.log("Btn1 was clicked");
//           let a = 25;
//           a++;
//           console.log(a);
// }

// let div = document.querySelector("div");

// // div.onmouseover = () => {
// //           console.log("You are inside the div");
// // }

// btn1.addEventListener("click", (evt) => {
//           console.log("button 1 was clicked");
//           console.log(evt);
// });
// btn1.addEventListener("click", () => {
//           console.log("handler 1");
// });
// btn1.addEventListener("click", () => {
//           console.log("handler 2");
// });

// const handler3 = () => {
//      console.log("handler 3")};

// btn1.addEventListener("click", handler3);
// btn1.addEventListener("click", () => {
//           console.log("handler 4");
// });

// btn1.removeEventListener("click", handler3);

let btn2 = document.querySelector("#btn2");
let body = document.querySelector("body");
let currMode = "light";

btn2.addEventListener("click", () => {
          if(currMode === "light"){
                    currMode = "dark";
                    // document.querySelector("body").style.backgroundColor = "black";
                    body.classList.add("dark");
                    body.classList.remove("light");

          }else {
                    currMode = "light";
                    // document.querySelector("body").style.backgroundColor = "white";
                    body.classList.add("light");
                    body.classList.remove("dark");
          }
          console.log(currMode);
});