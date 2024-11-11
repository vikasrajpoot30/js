const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (url === "https://example.com/post/comments") {
    resolve({
             status: 200,
             message: "Success",
             data: 
   [
    { email: "xyz@gmail.com", commentBody: "Well done keep it up" },
    {
                 email: 
   "hello@outlook.com",
                 commentBody: "Good going a lot to learn from you awesome"
    },
    {
                 email: 
   "ram99@gmail.com",
                 commentBody: "Anyone from Vadodara here"
    }
    ]
    });
    } else {
    reject({
             status: 404,
             message: "No Commentes found."
    });
    }
    }, 2000);
    });
    };
    // your code here
    const displayOutput= document.querySelector("#output");

    fakeFetch("https://example.com/post/comments").then((response)=>{
        if(response.status==200){
            response.data.forEach((item,index) => {
                const itemElement = document.createElement("p");
                itemElement.textContent=`${index+1}. ${item.email} `;
                displayOutput.appendChild(itemElement);
                
            });
        }
    }).catch((error)=>{
        displayOutput.textContent=error.message;
    })
    // Output on the DOM should be:
    // 1. xyz@gmail.com
    // 2. hello@outlook.com
    // 3. ram99@gmail.com