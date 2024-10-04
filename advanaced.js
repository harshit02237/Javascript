// console.log("one");
// console.log('Two');

// setTimeout(() => {
//   console.log('Hello FIve');
// }, 4000);

// console.log("third");
// console.log("four");

// ------------------- Callback Hell -------------------

// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// getData(1, () => {
//   console.log("getting data2...");
//   getData(2, () => {
//     console.log("Getting data3...");
//     getData(3, () => {
//       console.log("getting data 4");
//       getData(4);
//     });
//   });
// });

// ----------------------- Promises -------------------

//  let promise = new Promise((resolve, reject) => {
//           console.log("This is a promise");
//           resolve("Some error");
//           // reject("some error");
//  });

// function getData(dataId, getNextData) {
//                     return new Promise((resolve, reject) => {
//                               setTimeout(() => {
//                                         console.log("data", dataId);
//                                         resolve("sucess");
//                                         if(getNextData){
//                                                   getNextData();
//                                         }
//                               }, 5000);
//                     });
//            }


// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("This is a Promise");
//     resolve("sucess");
//   });
// };

// let promise = getPromise();
// promise.then((res) => {
//   console.log("Promise fullfilled", res);
// });

// promise.catch((err) => {
//   console.log("Promise rejected", err);
// });

// ------------------------ hell -----------------------------------

// function asyncFunc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Some Data 1");
//       resolve("success");
//     }, 4000);
//   });
// }
// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data 2");
//       resolve("success");
//     }, 5000);
//   });
// }

// console.log("fetching data...1");
// asyncFunc().then((res) => {
//   console.log(res);
//   console.log("fetching data...2");
// asyncFunc2().then((res) => {
//     console.log(res);
//   });
// });

// ------------------------ asyncFunc -----------------------------------

function api () {
          return new Promise((resolve, reject) => {
                    setTimeout(() => {
                              console.log("wheather data");
                              resolve(200);
                    }, 2000);
          });
}

async function getWheatherData(){
          await api();
}
