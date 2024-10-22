const calculateAverage=array=>{
    var sum=0;
    let total=array.length;
    for(const i of array){
        sum=sum+i;
    }
    return sum/total;
}


console.log(calculateAverage([1, 2, 3, 4, 5])) // 