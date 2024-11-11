const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (url === "https://example.com/winner-team") {
    resolve({
             status: 200,
             data: 
   {
               message: "Success",
               data: 
   ["Jhon", "Raju", "Anjali", "Sakshi"]
    }
    });
    } else {
    reject({
             status: 404,
             message: "No Users found."
    });
    }
    }, 2000);
    });
    };
    const displayOutput=document.querySelector("#output");
    fakeFetch("https://example.com/winner-team").then((response)=>{
        if(response.status==200){
        
                const teamMembers = response.data.data.join(", ")
                const itemElement=document.createElement("p");
                itemElement.textContent=`Congratulations to the members of winning team ${teamMembers}. great work! `
                displayOutput.appendChild(itemElement);
        
        }
    }).catch((error)=>{
        displayOutput.textContent=error.message;
    })
    // your code here
    // Output on the DOM should be:
    // Congratulation to the members of winning team Jhon, Raju, Anjali, Sakshi, great work k