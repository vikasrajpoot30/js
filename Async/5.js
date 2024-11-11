const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/photo") {
          resolve({
            status: 200,
            data: {
              photo: {
                link: "https://source.unsplash.com/featured/300x201",
                title: "Random Image"
              }
            }
          });
        } else {
          reject({
            status: 404,
            message: "No order found"
          });
        }
      }, 2000);
    });
   };
   // your code here
   const displayOutput = document.querySelector("#output");
   fakeFetch("https://example.com/photo").then((response)=>{
    if(response.status==200){
        const imgageElement = document.createElement("img");
        imgageElement.src=response.data.photo.link;
        imgageElement.alt= response.data.photo.title;
       displayOutput.appendChild(imgageElement);
    }
   }).catch((error)=>{
    displayOutput.textContent=error.message;
   })
  // Output: an image on the DOM