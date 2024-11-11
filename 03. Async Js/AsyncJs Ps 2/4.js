// Simulate a fetch request using fakeFetch to get order status details.
const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Check if the URL matches the correct order endpoint.
        if (url === "https://example.com/order/status/OR00A12") {
          // If it does, resolve with order data.
          resolve({
            status: 200,
            data: {
              order: {
                orderId: "OR00A12",
                status: "delivery pending",
                userName: "Kajal Kumari"
              }
            }
          });
        } else {
          // If it doesn't, reject with a 404 error message.
          reject({
            status: 404,
            message: "No order found"
          });
        }
      }, 2000); // Simulate a 2-second delay for the response.
    });
  };
  
  // Select the output element from the DOM.
  const displayOutput = document.querySelector("#output");
  
  // Call fakeFetch with the specified order URL.
  fakeFetch("https://example.com/order/status/OR00A12")
    .then((response) => {
      // If response is successful, extract order status and username.
      if (response.status == 200) {
        const status = response.data.order.status;
        const name = response.data.order.userName;
        // Display personalized order status message in the DOM.
        const itemElement = document.createElement("p");
        itemElement.textContent = `Hello ${name}, your order status is ${status}.`;
        displayOutput.appendChild(itemElement);
      }
    })
    .catch((error) => {
      // If there's an error, show the error message on the DOM.
      displayOutput.textContent = error.message;
    });
  