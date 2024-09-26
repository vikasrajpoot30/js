const sumArrays=(array1,array2)=>
{
    const answer=[];
    for(let i=0;i<array1.length;i++){
        answer.push(array1[i]+array2[i]);
    }
    return answer;
}


console.log(sumArrays([1, 2, 3, 4], [1, 2, 3, 5]))

