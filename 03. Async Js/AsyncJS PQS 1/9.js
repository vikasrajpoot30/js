const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (url === "https://example.com/api/data") {
    reject({
             status: 500,
           message: "Internal Server Error"
    });
    } else {
    resolve({
             status: 200,
           data: {
               message: "Success"
    }
    });
    }
    }, 2000);
    });
    };
   // Your Code here
   const displayOutput= document.querySelector("#output");
   fakeFetch("https://example.com/api/data").then((response)=>{
    console.log(response);
   }).catch((error)=>{
    if(error.status==500
    ){
        displayOutput.textContent="Internal Server Error! The server crashed. Please try again in some time"
    }
   })
    // Output on the DOM should be: 
   // Internal Server Error! The server crashed. Please try again in some time.