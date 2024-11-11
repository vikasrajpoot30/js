const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (url === "https://example.com/login") {
    resolve({
             status: 200,
             data:{
               auth: true}
    });
    } else {
    reject({
             status: 404,
             message: "Status not found"
    });
    }
    }, 2000);
    });
    };

    const displayOutput= document.querySelector("#output");
    fakeFetch("https://example.com/login").then((response)=>{
        if(response.status==200){
            const verificationStatus= response.data.auth;
            if(verificationStatus){
            displayOutput.textContent=`Verified`;
            }
            else {
                displayOutput.textContent=`Not Verified`;
            }

        }
    }).catch((error)=>{
        displayOutput.textContent=error.message;
    })
    // your code here
    // Output on the DOM should be:
    // Verified