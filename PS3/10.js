const sumOfEvenIndices=(array)=>{
    let sum=0;
    for(var i=0;i<array.length;i=i+2){
        sum=sum+array[i];
    }
  return sum;

}


console.log(sumOfEvenIndices([2, 4, 3, 7, 1, 5])) // 6
console.log(sumOfEvenIndices([12, 14, 3, 27, 15, 25])) // 30