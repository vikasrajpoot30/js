// let promiseThree= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve(  {username:"light yagami" ,email:"ligh@abc.com" }

//         )

//     },1000)
// }
// ); // promise end here

// promiseThree.then(function(user){
//     console.log(user)
// })


// promise 4
// const promiseFour = new Promise(function (resolve,reject){
//     setTimeout(function(){
//       let error=false;
//       if(!error){
//         resolve({ username:"vikas yagami", password:"abcder"}); // when resolved hogya 
//       } else {
//        reject("ERROR: SOMETHING WENT WRONG ")
//       }

//     },2000)
// })
// // consumption of promise

// promiseFour.then( (user)=>{
//    console.log(user);
//    return user.username;
   
// } ).then((username)=>{
//     console.log(username)
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>{
//     console.log("The Promise is either resolved or rejected ")
// })



// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//               let error=true;
//               if(!error){
//                 resolve({ username:"javascript", password:"123456"}); // when resolved hogya 
//               } else {
//                reject("ERROR: js went wrong")
//               }
        
//             },1000)
// });

// async function consumePromiseFive()
//     {
//     //    const response= await promiseFive; // wait krna  jab hoajye to isme dal dena 
//     //    console.log(response)
//   // gracefully handled error using trycatch
//        try {
//         const response= await promiseFive; // wait krna  jab hoajye to isme dal dena 
//         console.log(response)
//        } catch (error) {
//          console.log(error)
//        }
//     }

// consumePromiseFive();


// async function getAllUsers(){
//    try {
//     const response= await  fetch('https://jsonplaceholder.typicode.com/users');
//      const data= await response.json();  // strng to json conversion 
//      console.log(data);
//    } catch (error) {
//      console.log("ERROR: something went wrong",error)
//    }
  
// }
// getAllUsers();



// same thing doing by now by using .then and .catch

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
})
.then( (data)=>{
   console.log(data) // upr wale then se jo aaya
}).catch((error)=>{
    console.log(error)
})

