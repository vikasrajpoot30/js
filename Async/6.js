const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (url === "https://example.com/api/productlist") {
    resolve({
             status: 200,
             message: "Success",
             data: 
   [
    { itemName: "Shoes", price: 100, quantity: 2 },
    { itemName: "Hat", price: 350, quantity: 1 },
    { itemName: "Tshirt", price: 410, quantity: 5 }
    ]
    });
    } else {
    reject({
             status: 404,
             message: "Items list not found."
    });
    }
    }, 2000);
    });
    };
    // Your Code here
   const displayOutput= document.querySelector("#output");

   fakeFetch("https://example.com/api/productlist").then((response)=>{
    if(response.status==200){


        const itemElement =document.createElement("p");
        let sum=0;
        response.data.forEach(element => {
            sum +=element.price;  
        });

        itemElement.textContent=`INR ${sum}`;
        displayOutput.appendChild(itemElement);
    }
   }).catch((error)=>{
    displayOutput.textContent=error.message;
   })



    // Output on the DOM should be:
    // Total: INR 260