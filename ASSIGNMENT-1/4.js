// Your ES6 code here

const getShortestString=(arr)=>{
    let result="";
    let counter=Infinity;
    let index;
   
    if(arr.length==0)
        return undefined;
    else 
    {
    for(let i=0;i<arr.length;i++){
     if(arr[i].length<counter){

         result=arr[i];
         counter=arr[i].length;
     }
    }

}

    return result;
}

console.log(getShortestString(['primary', 'secondary', 'education', 'exams']))
// exams