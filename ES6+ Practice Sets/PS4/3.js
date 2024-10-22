const convertEvenToOdd=array=>{
    for(let i in array){
        if(array[i]%2==0)
            array[i]=array[i]+1;
    }
    return array;
}


var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(convertEvenToOdd(numArr))
// [1, 3, 3, 5, 5, 7, 7, 9, 9]