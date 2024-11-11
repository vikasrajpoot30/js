const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (!(url === "https://example.com/welcome")) {
    reject({
             status: 511,
             message: "Network auth required"
    });
    } else {
    resolve({
             status: 200,
             data: 
   {
               logged: true
    }
    });
    }
    }, 2000);
    });
    };
    const displayOutput= document.querySelector("#output");
    fakeFetch("https://example.com/welcome").then((response)=>{
        if(response.status==200){
            if(response.data.logged){
                const itemeElement = document.createElement("p");
                itemeElement.textContent=`Welcome to the server`
                itemeElement.style.color='green';
                displayOutput.appendChild(itemeElement);
            }
        }
    }).catch((error)=>{
        if(error.status==400){
            displayOutput.textContent=error.message;
        }
    })
    // your code here
    // Output: As per the response from server