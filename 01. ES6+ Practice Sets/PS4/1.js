// Your ES6 code here
const getMaxElement=array=>{
    let max=;
    for(var i=0;i<array.length;i++){
        if(array[i]>max)
            max=array[i];
    }
    return max;
}
let array = [4, 78, 8, 3, 6, 0, 12, 34]
console.log(getMaxElement(array)) // 78

