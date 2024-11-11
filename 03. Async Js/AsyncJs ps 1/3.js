// Your Code here
const delayedAlert=(str,t)=>{
    setTimeout(()=>console.log(str),t)
}
delayedAlert('Hello, world!', 2000);
// Should display an alert box with the message, Hello, world!

//The alert function is available only in a browser environment, 
//so if you're running this code in a Node.js environment,
//it won’t work since alert is undefined.