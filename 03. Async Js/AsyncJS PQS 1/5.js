const fakeFetch = (msg, shouldSucceed) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (shouldSucceed) {
    resolve(`message from server: ${msg}`);
    }
    reject(`error from server: ${msg}`);
    }, 3000);
    });
    };
    // Your Code here
    fakeFetch("hello this is my web show",true).then(()=>console.log("Hi")).catch((error)=>console.log(error))
    // Hi -- after 3 seconds