
function fakeFetch(msg, shouldReject) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldReject) {
          reject(`error from server: ${msg}`);
        } else {
          resolve(`from server: ${msg}`);
        }
      }, 3000);
  
    });
  }

// Internally inside promise
// function Promise(cb) {
//     let state = "pending";
//     function resolve(msg) {
//       state = "fulfilled";
//     }
//     function reject(msg) {
//       state = "reject";
//     }
//     cb(resolve, reject);
//   }

  const getServerResponseLength=msg=>{
    return fakeFetch(msg)
    .then(response=>response.length).catch(error => {
        console.error(error);
        return error.length; // If there's an error, return the length of the error message
    })
    // promise return krega response hme us response ki length return krni hai 
  

}
// fakeFetch("I am awesome")
// .then(data=>console.log(`The data came from server is ${data.length}`));

async function printDataFromServer(){
    const data=await fakeFetch("I am awesome ");
    console.log(data);
}
printDataFromServer();

