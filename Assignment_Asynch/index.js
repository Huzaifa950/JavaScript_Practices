
//***************************************M . HUZAIFA****************************************************
//************************************S O L U T I O N S*************************************************



//Task__1
// function message()
// {
//     setTimeout(()=>console.log("Hello World"), 2000);
// }
// message();



//Task__2
// function Time()
// {
//     setInterval(()=>
//     {
//         let currentdate = new Date();
//         let time = "Time : "+currentdate.getHours()+":"+currentdate.getMinutes()+":"+currentdate.getSeconds();
//         console.log(time);
//     }, 1000);    
// }
// Time();




//Task__3
// function multiply(num1, num2)
// {
//     let res = num1*num2;
//     console.log(res);
// }

// function handleResult()
// {
//     setTimeout(()=>multiply(6,4),1000);
// }
// handleResult();




//Task__4
// function countdown(number) {
//     return new Promise((resolve, reject) => {
//       let currentNumber = number; 
//       const interval = setInterval(() => {
//         console.log(currentNumber);
  
//         if (currentNumber === 1) {
//           clearInterval(interval);
//           resolve();
//         } else {
//           currentNumber--;
//         }
//       }, 1000);
//     });
//   }
//   countdown(7).then(() => {console.log('Countdown complete!');}).catch((error) => 
//   {
//     console.error('An error occurred:', error);
//   });
  



//Task__5
// function fetchData()
// {
//     let data = fetch('https://jsonplaceholder.typicode.com/posts');
//     data.then((value)=> {return value.json()})
//     .then((value1)=> console.log(value1))
//     .catch((reject)=>console.log(reject));
// }
// fetchData();




//Task__6
// function sum(array)
// {
//     return new Promise((resolve, reject) => 
//     {
//         setTimeout(()=>
//         {
//             let totalSum = 0;
//             array.forEach((n)=>
//             {
//                 totalSum+=n;
//             })
//             console.log(totalSum);
//             resolve();
//         }, 2000);
//     });
// }
// sum([1,3,5,10]).then(()=> console.log("Total Array Sum is shown Above"))
// .catch((error)=>console.log("Error we are in Catch Block"));




//Task__7
// function repeat(name, times){
//     let count=1;
//     function execute(){
//         name();
//         count+=1;

//         if(count<times)
//         {
//             setTimeout(execute, 500);
//         }
//     }
//     execute();
// }
// function name(){
//     console.log('Huzaifa');
// }
// repeat(name, 5);




//Task__8
// function fetchRandomUser() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         fetch('https://randomuser.me/api/')
//           .then(response => response.json())
//           .then(data => {
//             const user = data.results[0];
//             const firstName = user.name.first;
//             const lastName = user.name.last;
//             resolve({ firstName, lastName });
//           })
//           .catch(error => {
//             reject(error);
//           });
//       }, 1000);
//     });
//   }
//   fetchRandomUser()
//   .then(user => {
//     console.log(user.firstName, user.lastName);
//   })
//   .catch(error => {
//     console.error(error);
//   }); 




//Task__9
// function waitForCondition(conditionFunc, interval) 
// {
//     const promise_4 = new Promise((resolve, reject) => 
//     {
//       const intervalId = setInterval(() => {
//         if (conditionFunc()) {
//           clearInterval(intervalId);
//           resolve();
//         }
//       }, interval);
//     });
//     promise_4.then(successCallback).catch(() => console.log('Invalid condition or error occurred.'));
//   }
//     const condition = () => {
//     const currentTime = new Date().getSeconds();
//     return currentTime >= 3;
//   };
// const successCallback = () => console.log('Finally, Successful!');
// waitForCondition(condition, 5000)




//Task__10
// function fetchMultipleUrls(urlArray) {
//     const fetchPromises = urlArray.map((url) => {
//       return new Promise((resolve, reject) => {
//         const timeoutId = setTimeout(() => {
//           resolve(null);
//         }, 3000);
  
//         fetch(url)
//           .then((response) => response.json())
//           .then((data) => {
//             clearTimeout(timeoutId);
//             resolve(data);
//           })
//           .catch((error) => {
//             clearTimeout(timeoutId);
//             resolve(null);
//           });
//       });
//     });
  
//     return Promise.all(fetchPromises);
// }
// fetchMultipleUrls(['https://jsonplaceholder.typicode.com/posts', 'https://jsonplaceholder.typicode.com/posts'])
// .then((resolvedData) => {console.log('Resolved Data:', resolvedData);})
// .catch((error) => {console.log('Error occurred:', error);});









