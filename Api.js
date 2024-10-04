// const URL = "https://cat-fact.herokuapp.com/facts";
// let factPara = document.querySelector("#fact");
// const btn = document.querySelector("#btn");



// const getFacts = async () => {
//           console.log("Getting Data .....")
//           let response = await fetch(URL);
//           console.log(response);

//           let data = await response.json();
//           console.log(data[0].text);
//           factPara.innerText = data[0].text;
// }

// btn.addEventListener("click", getFacts); 

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => {
//           if(!response.ok){
//                     throw new Error ('network response was not ok');
//           }
//           return response.json();
// })
// .then(data => {
//           console.log(data);
// })
// .catch(error => {
//           console.error('there was a problem with the fetch operation', error);
// });

const postData = {
          title : 'This is the title',
          body: 'This is the table of content',
          userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts',
          {
                    method: 'POST',
                    headers: {
                              'Content-type':'application/json'
                    },
                    body: JSON.stringify(postData)
          })

.then(response => {
          if(!response.ok){
                    throw new Error('network response was not ok');
          }
          return response.json(); 
})
.then(data => {
          console.log('sucess', data);
})
.catch(error => {
          console.log('there was a problem with the fetch operation', error);
});