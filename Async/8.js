const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (url === "https://example.com/api/itemlist") {
    resolve({
             status: 200,
             message: "Success",
             data: 
   [
    { itemName: "Bread", price: 30, quantity: 10 },
    { itemName: "Water Bottle", price: 50, quantity: 50 },
    { itemName: "Dairy Milk", price: 20, quantity: 30 }
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
    
  const displayOutput = document.querySelector("#output");
  fakeFetch("https://example.com/api/itemlist").then(  (response)=>
    
    {
    if(response.status==200){
    // Format each item and display on the DOM
    response.data.forEach((item, index) => {
        const itemElement = document.createElement("p");
        itemElement.textContent = `${index + 1}. ${item.itemName} -- INR ${item.price} -- ${item.quantity}`;
        displayOutput.appendChild(itemElement);

    })

}
}).catch((error)=>{
    displayOutput.textContent = error.message;
  });


    // Output on the DOM should be in the format, {itemName} -- INR {price} -- {quantity}:
    // 1. Bread -- INR 30 -- 10
    // 2. Water Bottle -- INR 50 -- 50
    // 3. Dairy Milk -- INR 20 -- 30