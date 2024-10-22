const getOddNumbers=(array)=>{
    const result=[];
    for(let a of array){
        if(a%2!=0)
        result.push(a);

    }
    return result;
}


console.log(getOddNumbers([2,3,6,7,8,9,13,12,11,0]))

