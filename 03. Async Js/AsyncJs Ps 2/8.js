const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (url === "https://example.com/api/allbooks") {
    reject({
             status: 400,
             message: "Bad Request"
    });
    } else {
    resolve({
             status: 200,
             data: 
   {
               message: "Success"
    }
    });
    }
    }, 2000);
    });
    };
    // Your Code here
    const displayOutput= document.querySelector("#output");
    fakeFetch("https://example.com/api/allbooks").then((response)=>{
        displayOutput.textContent=response.message;
    }).catch((error)=>{
        if(error.status==400){
            const itemElement= document.createElement("p");
            itemElement.textContent=`${error.message} ! Requested size too large`;
            displayOutput.appendChild(itemElement);
        }
    })
    // Output on the DOM should be: 
   // Bad Request! Requested size too large