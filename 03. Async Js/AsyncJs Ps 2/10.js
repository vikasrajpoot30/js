const fakeFetch = (url, dimensions) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (url === "https://example.com/getImage") {
    resolve({
             status: 200,
           data: {
              image: {
                 link: 
   `https://picsum.photos/${dimensions[0]}/${dimensions[1]}`,
               title: "Random Image"
   }
    }
    });
    "Random Image"
    } else {
    reject({
             status: 404,
           message: "No photo of such dimension found"
    });
    }
    }, 2000);
    });
    }
    const displayOutput=document.querySelector("#output");
    fakeFetch("https://example.com/getImage",[100,200]).then((response)=>{
  if(response.status==200){
     const imgElement = document.createElement("img");
     imgElement.src=response.data.image.link;
     imgElement.alt= response.data.image.title;
     displayOutput.appendChild(imgElement);


  }




    }).catch((error)=>{
        displayOutput.textContent=error.message;
    })
    // your code here
    // Output on the DOM should be an image