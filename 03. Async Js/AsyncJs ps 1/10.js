const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (url === "https://example.com/api/profile") {
    reject({
             status: 401,
             message: "Unauthorized Access"
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
    fakeFetch("https://example.com/api/profile").then((response)=>{
        displayOutput.textContent=response.message;
    }).catch((error)=>{
        if(error.status==401){
            displayOutput.textContent=' Unauthorized Access! Looks like you are not logged in. Please login to see your profile'
        }
    })
    // Output on the DOM should be: 
   // Unauthorized Access! Looks like you are not logged in. Please login to see your profil