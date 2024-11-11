const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (url === "https://example.com/api/users") {
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
    fakeFetch("https://example.com/api/users").then((response)=>{
        displayOutput.textContent=response.message;
    }).catch((error)=>{
        if(error.status==500){
            const itemElement= document.createElement("p");
            itemElement.textContent=`oops. Unexpected Error. Please try again`;
            itemElement.style.color='red';
            displayOutput.appendChild(itemElement)
        }
    })

    // Output on the DOM should be (in red color): 
   // Oops. Unexpected Error. Please try again.